import { useState } from 'react';

import Card from '../UI/Card';
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const { item } = props;
  
  const [title, setTitle] = useState(item.title);

  const cliclHandler = ()=> {
    setTitle('updated');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={item.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{item.amount}</div>
      </div>
      <button onClick={cliclHandler}>change title</button>
    </Card>
  );
}

export default ExpenseItem;
