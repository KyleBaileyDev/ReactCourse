import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [filterDate, setFilterDate] = useState("2020");

  const getDate = (date) => {
    setFilterDate(date);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter onDateChange={getDate} selected={filterDate} />
      <ExpensesChart
        expenses={props.expenses.filter(
          (x) => x.date.getFullYear().toString() === filterDate
        )}
      />
      <ExpensesList expenses={props.expenses} filterDate={filterDate} />
    </Card>
  );
};

export default Expenses;
