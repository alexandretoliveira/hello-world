// Global app controller
import Search from './models/Search';
import Recipe from './models/Recipe';
import Likes from './models/Likes';
import * as searchView from './views/searchView';
import * as recipeView from './views/recipeView';
import * as listView from './views/listView';
import * as likesView from './views/likesView';
import { elements, renderLoader, clearLoader } from './views/base';
import List from './models/List';


/** Global state of the app
 * - Search object
 * - Current recipe object
 * - Shopping list object
 * - Liked recipes
 */
const state = {};

/**
 *  SEARCH CONTROLLER
 */
const controlSearch = async () => {
    // 1. Get query from view
    const query = searchView.getInput(); 

    if(query){
        // 2. New search object and add to state
        state.search = new Search(query);

        // 3. Prepare UI for results
        searchView.clearInput();
        searchView.clearResult();
        renderLoader(elements.searchRes); // show the icon loading

        try{
            // 4. Search for recipes
            await state.search.getResults();

            // 5. Render results on the UI
            clearLoader(); // remove the icon loading
            searchView.renderResults(state.search.result);

        }catch(error){
            console.log(error);
            clearLoader();
        }
        
    }
}

elements.searchForm.addEventListener('submit', e => {
    e.preventDefault();
    controlSearch();
})

elements.searchResPages.addEventListener('click', e => {
    const btn = e.target.closest('.btn-inline');
    if(btn){
        const goToPage = parseInt(btn.dataset.goto); 
        searchView.clearResult();
        searchView.renderResults(state.search.result, goToPage);
    }
});


/**
 *  RECIPE CONTROLLER
 */
const controlRecipe = async () => {
    // Get ID from url
    const id = window.location.hash.replace('#','');

    if(id){
        // Prepare UI for changes
        recipeView.clearRecipe();
        renderLoader(elements.recipe);

        // Highlight selected
        if(state.search) searchView.highlightSelected(id);

        // Create new recipes object
        state.recipe = new Recipe(id);


        // Get recipe data
        try{

            await state.recipe.getRecipe();

            // Calculate servings and time and parse ingredients
            state.recipe.parseIngredients();
            state.recipe.calcTime();
            state.recipe.calcServings();

            // Render the recipe
            clearLoader();
            if(!state.likes) state.likes = new Likes();
            recipeView.renderRecipe(state.recipe, state.likes.isLiked(id));

        }catch(error){
            console.log(error);
        }
    }

};

/**
 * LIST CONTROLLER
 */
const controlList = () => {
    // Create a new list IF there is none yet
    if(!state.list) state.list = new List();

    // Add each ingredient to the list and UI
    state.recipe.ingredients.forEach(el => {
        const item = state.list.addItem(el.count, el.unit, el.ingredient);
        listView.renderItem(item);
    });

}

/**
 * LIKE CONTROLLER
 */
const controlLike = () => {
    if(!state.likes) state.likes = new Likes();
    const currentID = state.recipe.id;

    // User has not yet liked current recipe
    if(!state.likes.isLiked(currentID)){
        //Add like to the state
        const newLike = state.likes.addLike(currentID,
                        state.recipe.title,
                        state.recipe.author,
                        state.recipe.img);
        //Toggle the like button
        likesView.toggleLikeBtn(true);
        // Add like to the UI list
        likesView.renderLike(newLike);


    }else{ 
        // User has liked current recipe

        // Remove like from the state
        state.likes.deleteLike(currentID);

        // Toggle the like button
        likesView.toggleLikeBtn(false);
        
        // Remove like to the UI list
        likesView.deleteLike(currentID);



    }
    likesView.toggleLikeMenu(state.likes.getNumLikes());;
}

/**
 * EVENTLISTENERS
 */

// Add eventListener
['hashchange','load'].forEach(event => window.addEventListener(event, controlRecipe));

// Restore liked recipes on page load
window.addEventListener('load', () => {
    state.likes = new Likes();
    
    // Restore Likes
    state.likes.readStorage();

    // Toggle like menu button
    likesView.toggleLikeMenu(state.likes.getNumLikes());

    // Render the existing likes
    state.likes.likes.forEach(like => likesView.renderLike(like));
})

// Handling recipe button clicks
elements.recipe.addEventListener('click', e => {
    if(e.target.matches('.btn-decrease, .btn.decrease *')){
        // Decrease buttons is clicked
        if(state.recipe.servings > 1)
            state.recipe.updateServings('dec');
            recipeView.updateServingsIngredient(state.recipe);
    }else if(e.target.matches('.btn-increase, .btn.increase *')){
        // Increase buttons is clicked
        state.recipe.updateServings('inc');
        recipeView.updateServingsIngredient(state.recipe);
    }else if (e.target.matches('.recipe__btn--add, .recipe__btn--add *')){
        controlList();
    }else if (e.target.matches('.recipe__love, .recipe__love *')){
        controlLike();
    }
});


// Handle delete and update list item events
elements.shopping.addEventListener('click', e => {
    const id = e.target.closest('.shopping__item').dataset.itemid;

    // delete
    if(e.target.matches('.shopping__delete, .shopping__delete *')){
        state.list.deleteItem(id);
        listView.deleteItem(id);
    }else if(e.target.matches('.shopping__count-value')){
        const val = parseFloat(e.target.value);
        state.list.updateCount(id, val);
    }
});

//window.l = new List();



