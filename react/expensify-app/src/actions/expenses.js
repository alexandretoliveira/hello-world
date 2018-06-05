import uuid from 'uuid';

// EXPENSES ACTIONS
//Add Expense 
export const addExpense = (
    {
        description = '', 
        note = '', 
        amount = 0, 
        createAt = 0
    } = {} ) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createAt
    }
})

//Remove Expense 
export const removeExpense = ({ id } = {} ) => ({
    type: 'REMOVE_EXPENSE',
    id
});

//Edit Expense
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});