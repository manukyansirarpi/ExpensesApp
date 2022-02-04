import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import { useState } from "react";

const Expenses = (props) => {
  const { expenses } = props;

  return (
    <Card className = "expenses"> 
      {expenses.map((item) => (
        <ExpenseItem key={item.id} item={item} />
      ))}
    </Card>
  );
}

export default Expenses;
