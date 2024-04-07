import ExpenseItem from "./components/Expenses/ExpenseItemComp/ExpenseItem.jsx";
import "./App.css";
import Card from "./components/UI/card-comp/Card.jsx";
import NewExpenseComp from "./components/Expenses/NewExpenseComp/NewExpenseComp.jsx";
import Expenses from "./components/Expenses/ExpensesComp/Expenses.jsx";
import { useState } from "react";

function App() {
  const DUMMY_EXPENSES = [
    { id: 1, title: "Dentist", amount: 500, date: new Date() },
    { id: 2, title: "Car", amount: 6500, date: new Date() },
    { id: 3, title: "Tigari", amount: 25, date: new Date() },
  ];
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };

  return (
    <Card className={"app"}>
      <NewExpenseComp appAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
      <h1></h1>
    </Card>
  );
}

export default App;
