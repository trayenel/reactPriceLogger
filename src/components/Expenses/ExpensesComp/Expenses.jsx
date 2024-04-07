import { useState } from "react";
import "./Expenses.css";
import Card from "../../UI/card-comp/Card.jsx";
import ExpensesFilter from "../ExpenseFilterComp/ExpensesFilter.jsx";
import ExpenseItem from "../ExpenseItemComp/ExpenseItem.jsx";

function Expenses(props) {
  const [filteredYear, setfilteredYear] = useState("2024");

  const filteredYearHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  let expenseItems = <h2>No expenses for selected date.</h2>;

  if (filteredExpenses.length > 0) {
    expenseItems = filteredExpenses.map((expense) => (
      <ExpenseItem key={expense.id} expense={expense} />
    ));
  }

  return (
    <Card className={"expenses"}>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filteredYearHandler}
      />
      {expenseItems}
    </Card>
  );
}

export default Expenses;
