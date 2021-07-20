import { useState } from 'react';
import './App.css';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [
    {id: 'e1', title: 'Car Insurance', amount: 294.30, date: new Date(2021, 2, 28)},
    {id: 'e2', title: 'PC', amount: 800, date: new Date(2021, 5, 28)},
    {id: 'e3', title: 'IntelliJ', amount: 180, date: new Date(2021, 8, 5)},
    {id: 'e4', title: 'Water', amount: 84, date: new Date(2021, 2, 13)}
  ];

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    console.log(expense);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  }
  
  return (
    <div className="App">
      <div>
        <NewExpense onAddExpense={addExpenseHandler} />
        <Expenses items={expenses}/>
      </div>
    </div>
  );
}

export default App;
