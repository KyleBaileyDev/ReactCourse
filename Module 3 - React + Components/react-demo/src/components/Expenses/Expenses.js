import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filterDate, setFilterDate] = useState("2020");

  const getDate = (date) => {
    setFilterDate(date);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onDateChange={getDate} selectedDate={filterDate} />
      {props.expenses.map((x) => (
        <ExpenseItem
          title={x.title}
          amount={x.amount}
          date={x.date}
          key={x.id}
        />
      ))}
    </Card>
  );
};

export default Expenses;
