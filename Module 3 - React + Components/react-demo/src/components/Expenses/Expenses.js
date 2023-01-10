import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const expenses = props.expenses.map((x, i) => (
    <ExpenseItem title={x.title} amount={x.amount} date={x.date} key={i} />
  ));

  return <Card className="expenses">{expenses}</Card>;
};

export default Expenses;
