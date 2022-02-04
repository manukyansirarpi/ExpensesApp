import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/Expenses/ExpensesFilter";
import Chart from './components/Chart/Chart';
import Card from "./components/UI/Card";
import {useState} from 'react';

const App = () => {

  const [expenses, setExpenses] = useState(
    [
      {
        id: "e1",
        title: "Toilet Paper",
        amount: 94.12,
        date: new Date(2020, 7, 14),
      },
      { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
      {
        id: "e3",
        title: "Car Insurance",
        amount: 294.67,
        date: new Date(2021, 2, 28),
      },
      {
        id: "e4",
        title: "New Desk (Wooden)",
        amount: 450,
        date: new Date(2021, 5, 12),
      },
    ]
  );
  const [filtered, setFiltered] = useState('');

  const onSaveExpenseDate = (data) => {debugger;
    setExpenses([...expenses, data]);
  }

  const onFilterDate = (date) => {
    setFiltered(expenses.filter(ex => 
      `${ex.date.getFullYear()}` == date
    ));
  }
  

  return (
    <Card className = "expenses"> 
      <NewExpense onSaveExpenseDate={onSaveExpenseDate}/>
      <ExpensesFilter onFilterDate={onFilterDate}/>
      <Chart/>
      <Expenses expenses={filtered?filtered:expenses} />
    </Card>
  );
}

export default App;
