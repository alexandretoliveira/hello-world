import { createStore, combineReduces } from 'redux';

const demoState = {
    expenses: [{
        id: '' ,
        description: '',
        note: '',
        amount: 54500,
        createAt: 0

    }],
    filters: {
        text: '',
        sortBy: '', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

