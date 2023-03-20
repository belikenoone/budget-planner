import React, { useContext, useState } from "react";
import AppContext from "../store/context";
const ExpenseForm = () => {
  const { addExpense } = useContext(AppContext);
  const [expenseTitle, setExpenseTitle] = useState("");
  const [expenseCost, setExpenseCost] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = {
      id: Math.random(),
      title: expenseTitle,
      cost: +expenseCost,
    };
    addExpense(newExpense);
    setExpenseTitle("");
    setExpenseCost("");
  };
  return (
    <form
      className="w-[75%] lg:w-[50%] bg-purple mx-auto my-8 flex flex-col justify-center  gap-5 py-4 rounded-lg px-5"
      onSubmit={handleSubmit}
    >
      <h2 className="text-4xl  border-b-2">Add A New Expense</h2>
      <div className="flex flex-col">
        <label htmlFor="expense-title" className="text-whitish text-3xl">
          Title
        </label>
        <input
          type="text"
          placeholder="Expense Title"
          id="expense-title"
          className="py-2 px-3 rounded-md"
          value={expenseTitle}
          onChange={(e) => setExpenseTitle(e.target.value)}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="expense-cost" className="text-whitish text-3xl">
          Cost
        </label>
        <input
          type="number"
          placeholder="Expense Title"
          id="expense-cost"
          className="py-2 px-3 rounded-md"
          value={expenseCost}
          onChange={(e) => setExpenseCost(e.target.value)}
        />
      </div>
      <button className="py-2 px-4 bg-whitish text-xl">Add</button>
    </form>
  );
};

export default ExpenseForm;
