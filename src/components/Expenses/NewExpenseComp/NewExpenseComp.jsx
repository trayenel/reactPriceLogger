import { useState } from "react";
import "./NewExpenseComp.css";
import NewExpenseForm from "../NewExpenseFormComp/NewExpenseForm.jsx";

function NewExpenseComp(props) {
  const saveExpenseData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(36).slice(2),
    };
    props.appAddExpense(expenseData);
  };

  return (
    <div className={"new-expense"}>
      <NewExpenseForm onSaveExpenseData={saveExpenseData} />
    </div>
  );
}

export default NewExpenseComp;
