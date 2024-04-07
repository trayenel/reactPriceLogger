import { useState } from "react";
import "./NewExpenseComp.css";

function NewExpenseComp() {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value);
  };

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const expenseDate = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(expenseDate);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <div className={"new-expense"}>
      <form onSubmit={submitHandler}>
        <div className={"new-expense__controls"}>
          <div className={"new-expense__control"}>
            <label>Title</label>
            <input
              type="text"
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className={"new-expense__control"}>
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangeHandler}
              value={enteredAmount}
            />
          </div>
          <div className={"new-expense__control"}>
            <label>Date</label>
            <input
              type="date"
              min="2024-01-01"
              max="2024-12-31"
              onChange={dateChangeHandler}
              value={enteredDate}
            />
          </div>
          <div className={"new-expense__actions"}>
            <button type={"submit"}>Add expense</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default NewExpenseComp;
