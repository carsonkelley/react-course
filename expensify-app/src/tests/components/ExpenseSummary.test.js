import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseSummary } from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';
import { filters } from '../fixtures/filters'; 


test('should render ExpenseSummary with single expense correctly', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={1} expensesTotal={235}/>);
    expect(wrapper).toMatchSnapshot();
});

test('should render ExpenseSummary with multiple expenses correctly', () => {
    const wrapper = shallow(<ExpenseSummary expenseCount={23} expensesTotal={3423424}  />);
    expect(wrapper).toMatchSnapshot();
});