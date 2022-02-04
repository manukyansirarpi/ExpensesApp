import {useState} from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {

    const [expense, setExpense] = useState({
        title: '',
        amount: '',
        date: ''
    });

    const titleChangeHandler = (event) => {
        setExpense((prevState)=>{
            return {...prevState, title: event.target.value }
        });
    };

    const amountChangeHandler = (event) => {
        setExpense((prevState)=>{
            return {...prevState, amount: event.target.value }
        });
    };

    const dateChangeHandler = (event) => {
        setExpense((prevState)=>{
            return {...prevState, date: event.target.value }
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.onSaveExpenseDate({...expense, date: new Date(expense.date)})
        setExpense({
            title: '',
            amount: '',
            date: ''
        });
    }

    return <form onSubmit={submitHandler}>
        <div className ="ew-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' onChange={titleChangeHandler} value={expense.title}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min="0.01" step="0.01" onChange={amountChangeHandler} value={expense.amount}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value={expense.date}/>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </div>
    </form>
}

export default ExpenseForm;