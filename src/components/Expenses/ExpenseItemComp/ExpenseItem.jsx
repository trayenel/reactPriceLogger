import { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "../ExpenseDateComp/ExpenseDate.jsx";
import Card from "../../UI/card-comp/Card.jsx";

function ExpenseItem(props) {
  const [title, setTitle] = useState(props.expense.title);
  const clickHandler = () => {
    setTitle("Updated!");
  };

  return (
    <Card className={"expense-item"}>
      <ExpenseDate date={props.expense.date} />
      <div className={"expense-item__description"}>
        <h2>{title}</h2>
        <div className={"expense-item__price"}>{props.expense.amount}$</div>
      </div>
      <button onClick={clickHandler}>Change title</button>
    </Card>
  );
}

export default ExpenseItem;
