import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  const filteredExpenses = props.expenses
    .map((x) => (
      <li key={x.id}>
        <ExpenseItem title={x.title} amount={x.amount} date={x.date} />
      </li>
    ))
    .filter(
      (x) =>
        x.props.children.props.date.getFullYear().toString() ===
        props.filterDate
    );

  return filteredExpenses.length > 0 ? (
    <ul className="expenses-list">{filteredExpenses}</ul>
  ) : (
    <h2 className="expenses-list__fallback">Found no expenses.</h2>
  );
};

export default ExpensesList;
