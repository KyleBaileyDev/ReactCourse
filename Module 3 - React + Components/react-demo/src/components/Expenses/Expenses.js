import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filterDate, setFilterDate] = useState("2020");

  const getDate = (date) => {
    setFilterDate(() => date);
    console.log(filterDate);
  };

  const expenses = props.expenses.map((x, i) => (
    <ExpenseItem title={x.title} amount={x.amount} date={x.date} key={i} />
  ));

  return (
    <Card className="expenses">
      <ExpensesFilter onDateChange={getDate} selectedDate={filterDate} />
      {expenses}
    </Card>
  );
};

export default Expenses;
