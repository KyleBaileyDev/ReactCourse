import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filterDate, setFilterDate] = useState(props.setDropdown);

  const getDate = (date) => {
    setFilterDate(date);
  };

  console.log(filterDate);
  console.log(props.setDropdown);
  if (filterDate !== props.setDropdown) {
    setFilterDate(props.setDropdown);
  }

  return (
    <Card className="expenses">
      <ExpensesFilter onDateChange={getDate} selectedDate={filterDate} />
      {props.expenses
        .map((x) => (
          <ExpenseItem
            title={x.title}
            amount={x.amount}
            date={x.date}
            key={x.id}
          />
        ))
        .filter((x) => x.props.date.getFullYear().toString() === filterDate)}
    </Card>
  );
};

export default Expenses;
