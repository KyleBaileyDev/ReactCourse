import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  const expenses = props.expenses.map((x, i) => (
    <ExpenseItem title={x.title} amount={x.amount} date={x.date} key={i} />
  ));

  return <div className="expenses">{expenses}</div>;
}

export default Expenses;
