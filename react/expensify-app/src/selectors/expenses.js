// Get visible expenses
const getVisibleExpenses = (expenses, { text ='', sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        const startDateMatch = typeof startDate !== 'number' || expense.createAt >= startDate,
        endDateMatch = typeof startDate !== 'number' || expense.createAt <= endDate, 
        textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'date'){
            return a.createAt < b.createAt ? 1 : -1;
        } else if(sortBy === 'amount'){
            return a.amount < b.amount ? 1 : -1;
        }
    });
};

export default getVisibleExpenses;