import { createStore } from 'redux';

// Action generators - functions that return action objects
//const incrementCount = (payload = {}) => ({ 
const incrementCount = ({ incrementBy = 1 }) => ({ 
    type: 'INCREMENT',
    //incrementBy: payload.incrementBy === number ? payload.incrementBy : 1
    incrementBy
});

const decrementCount = () => ({type: 'DECREMENT'});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});
  
// Reducers
// 1. Reducers are pure functions 
// 2. Never change state or action - return obj that represent new state
const countReducer = (state = {count: 0}, action) => {
    switch (action.type){
        case 'INCREMENT': 
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
        return {
            count: state.count - 1
        };
        case 'RESET':
            return {
                count: 0
            };
        case 'SET':
        return {
            count: action.count
        };
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

//Actions
/*
store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});
*/

// using action generator
store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(incrementCount());

/*
store.dispatch({
    type: 'DECREMENT'
});
*/

store.dispatch(decrementCount());

unsubscribe();

store.dispatch({
    type: 'RESET'
});

/*
store.dispatch({
    type: 'SET',
    count: 101
});
*/
store.dispatch(setCount({count: 101}));




