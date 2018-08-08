import { createStore, combineReducers } from 'redux';

const demoState = {
    expenses: [{
        id: '9nkjsdfb78',
        description: 'January Rent',
        note: 'This is the final payment.',
        amount: 54500,
        createAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};