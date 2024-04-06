import ExpenseItem from "./components/Expenses/expense-item-comp/ExpenseItem.jsx";
import "./App.css";
import Card from "./components/UI/card-comp/Card.jsx";

function App() {
  const expenses = [
    { id: 1, title: "Dentist", amount: 500, date: new Date() },
    { id: 2, title: "Car", amount: 6500, date: new Date() },
    { id: 3, title: "Tigari", amount: 25, date: new Date() },
  ];

  return (
    <Card className={"app"}>
      <h1>Sa incepem!</h1>
      <ExpenseItem expense={expenses[0]} />
      <ExpenseItem expense={expenses[1]} />
      <ExpenseItem expense={expenses[2]} />
      <h1></h1>
    </Card>
  );
}

export default App;