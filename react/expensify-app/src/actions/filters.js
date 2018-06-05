
// FILTERS ACTIONS
// SetText Filter
export const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});

// sortByAmount Filter
export const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
});

// sortByDate Filter
export const sortByDate = () => ({
    type: 'SORT_BY_DATE'
});

// setStartDate
export const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

// setEndDate
export const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});