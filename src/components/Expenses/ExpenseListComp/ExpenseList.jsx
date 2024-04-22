import "./ExpenseList.css";
import ExpenseItem from "../ExpenseItemComp/ExpenseItem.jsx";

const expenseList = (props) => {
  if (props.expenses.length === 0) {
    return (
      <h2 className={"expenses-list__fallback"}>
        No expenses for selected date.
      </h2>
    );
  }

  return (
    <ul className={"expenses-list"}>
      {props.expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
    </ul>
  );
};

export default expenseList;
