import React, { useContext } from "react";
import AppContext from "../store/context";
import { AiOutlineDelete } from "react-icons/ai";
const ExpenseItem = ({ data }) => {
  const { deleteExpense } = useContext(AppContext);
  return (
    <div className="bg-red flex justify-between px-4 py-3  items-center ">
      <span className="text-3xl text-whitish">{data.title}</span>
      <div className="flex gap-3 items-center justify-center">
        <span className="text-2xl">${data.cost}</span>
        <div className="tooltip" data-tip="Delete Expense">
          <button
            className="btn btn-primary"
            onClick={() => deleteExpense(data.id)}
          >
            <AiOutlineDelete size={35} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpenseItem;
