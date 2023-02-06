import React from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";
import { useState } from "react";
const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };
  const [formState, setFormState] = useState("closed");
  const showFormBtn = (
    <button
      onClick={() => {
        setFormState("open");
      }}
    >
      Add New Expense
    </button>
  );

  const closeFormHandler = () => {
    setFormState("closed");
  };
  return (
    <div className="new-expense">
      {formState === "closed" ? (
        showFormBtn
      ) : (
        <ExpenseForm
          onCloseForm={closeFormHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
