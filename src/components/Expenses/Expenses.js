import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import './Expenses.css';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    }

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() == filteredYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                {/* {filteredExpenses.length === 0 && <p>No expenses found.</p> }
                {filteredExpenses.length > 0 &&
                    filteredExpenses.map((expense) => (
                    <ExpenseItem 
                    key={expense.id}
                    title={expense.title} 
                    amount={expense.amount} 
                    date={expense.date} 
                />
                ))} */}
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;