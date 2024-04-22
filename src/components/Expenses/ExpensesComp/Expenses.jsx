import { useState } from "react";
import "./Expenses.css";
import Card from "../../UI/card-comp/Card.jsx";
import ExpensesFilter from "../ExpenseFilterComp/ExpensesFilter.jsx";
import ExpenseList from "../ExpenseListComp/ExpenseList.jsx";
import ExpenseChart from "../ExpenseChartComp/ExpenseChart.jsx";
import ExpenseDate from "../ExpenseDateComp/ExpenseDate.jsx";

function Expenses(props) {
  const [filteredYear, setfilteredYear] = useState("2024");

  const filteredYearHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className={"expenses"}>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filteredYearHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <ExpenseList expenses={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
