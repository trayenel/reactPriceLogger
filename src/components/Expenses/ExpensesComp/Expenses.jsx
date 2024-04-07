import { useState } from "react";
import "./Expenses.css";
import ExpenseDate from "../ExpenseDateComp/ExpenseDate.jsx";
import Card from "../../UI/card-comp/Card.jsx";
import ExpensesFilter from "../ExpenseFilterComp/ExpensesFilter.jsx";
import ExpenseItem from "../ExpenseItemComp/ExpenseItem.jsx";

function Expenses(props) {
  const [filteredYear, setfilteredYear] = useState("2024");

  const filteredYearHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  return (
    <Card className={"expenses"}>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filteredYearHandler}
      />
      {props.items.map((expense) => (
        <ExpenseItem expense={expense} />
      ))}
    </Card>
  );
}

export default Expenses;
