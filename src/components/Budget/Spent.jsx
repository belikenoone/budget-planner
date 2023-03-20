import React, { useContext } from "react";
import AppContext from "../../store/context";

const Spent = () => {
  const { expenses } = useContext(AppContext);
  const totalSpent = expenses.reduce((acc, curr) => {
    return acc + curr.cost;
  }, 0);
  return (
    <div className="bg-red flex  px-4 py-3 items-center rounded-lg gap-3 justify-between">
      <div className="flex flex-col ">
        <span className="text-4xl font-light text-whitish">Spent So Far</span>
        <span className="text-5xl text-whitish">${totalSpent}</span>
      </div>
    </div>
  );
};

export default Spent;
