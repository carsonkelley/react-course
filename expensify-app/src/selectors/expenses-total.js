
export default (expenses) => {
    return expenses.reduce((a, x) => a + x.amount, 0);
};