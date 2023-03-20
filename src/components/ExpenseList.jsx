import React, { useContext } from "react";
import ExpenseItem from "./ExpenseItem";
import AppContext from "../store/context";

const ExpenseList = () => {
  const { expenses } = useContext(AppContext);
  return (
    <section className="w-[90%] mx-auto ">
      <h2 className="text-4xl border-slate-300 border-b-2">Expenses</h2>
      {expenses.length > 0 ? (
        <div className="flex flex-col gap-4 my-4">
          {expenses.map((data) => (
            <ExpenseItem data={data} key={data.id} />
          ))}
        </div>
      ) : (
        <span className="text-3xl text-center py-4">No expenses Yet</span>
      )}
    </section>
  );
};

export default ExpenseList;
