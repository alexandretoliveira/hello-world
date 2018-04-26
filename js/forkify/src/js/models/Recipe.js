import {key, proxy} from '../config';

export default class Recipe {
    constructor(id) {
        this.id = id
    }

    async getRecipe() {
        
        try{
            const json = await fetch(`${proxy}http://food2fork.com/api/get?key=${key}&rId=${this.id}`);
            const res = await json.json();
            this.title = res.recipe.title;
            this.author = res.recipe.publisher;
            this.img = res.recipe.image_url;
            this.url = res.recipe.source_url;
            this.ingredients = res.recipe.ingredients;
        }catch(error){
            console.log(error);
        }
    }

    calcTime() {
        // Assuming that we need 15 min for each 3 ingredients
        const numIng = this.ingredients.length;
        const periods = Math.ceil(numIng / 3);
        this.time = periods * 15;
    }

    calcServings(){
        this.servings = 4;
    }

    parseIngredients() {
        const unitsLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds'];
        const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound' ];
        const newIgredients = this.ingredients.map(el => {
            // Uniform units
            let ingredient = el.toLowerCase();
            unitsLong.forEach( (unit, i) => {
                ingredient = ingredient.replace(unit, unitsShort[i]);
            });

            // Remove parentheses - regular expressions
            ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');
            
            // Parse ingredients into count, unit and ingredient
            const arrIng = ingredient.split(' '); 
                // loop for the unitsShort array, find the el2 in arrIng that matches  
                // in unitsShort and return the index of the element
            const unitIndex = arrIng.findIndex(el2 => unitsShort.includes(el2));

            let objIng;
            if(unitIndex > -1){
                // There is a unit
                const arrCount = arrIng.slice(0, unitIndex); // return number until the unit
                let count;

                if(arrCount.length === 1)
                    count = eval(arrIng[0].replace('-','+')); // in case of [1-1/2]
                else  // [4, 1/2] -> join -> 4+1/2 -> eval -> 4.5
                    count = eval(arrIng.slice(0, unitIndex).join('+')); 
                
                objIng = {
                    count,
                    unit: arrIng[unitIndex],
                    ingredient: arrIng.slice(unitIndex+1).join(' ')
                }

            }else if(parseInt(arrIng[0])){
                // There is NO unit, but there is a number in 1st position
                objIng = {
                    count: parseInt(arrIng[0]),
                    unit: '',
                    ingredient: arrIng.slice(1).join(' ')
                }

            }else if(unitIndex === -1){
                // There is No unit
                objIng = {
                    count: 1,
                    unit: '',
                    ingredient
                }
            }
            ingredient = objIng;
            return ingredient;
        });
        this.ingredients = newIgredients;
    }
}