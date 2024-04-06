import "./ExpenseItem.css";
import ExpenseDate from "../expense-date-comp/ExpenseDate.jsx";
import Card from "../../UI/card-comp/Card.jsx";

function ExpenseItem(props) {
  return (
    <Card className={"expense-item"}>
      <ExpenseDate date={props.expense.date} />
      <div className={"expense-item__description"}>
        <h2>{props.expense.title}</h2>
        <div className={"expense-item__price"}>{props.expense.amount}$</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
