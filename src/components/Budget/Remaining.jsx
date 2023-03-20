import React, { useContext } from "react";
import AppContext from "../../store/context";

const Remaining = () => {
  const { expenses, budget } = useContext(AppContext);
  const remaining = expenses.reduce((acc, curr) => {
    return acc + curr.cost;
  }, 0);
  return (
    <div className="bg-[#576ca8] flex  px-4 py-3 items-center rounded-lg gap-3 justify-between">
      <div className="flex flex-col ">
        <span className="text-4xl font-light text-whitish">Remaining</span>
        <span className="text-5xl text-whitish">
          ${budget - Number(remaining)}
        </span>
      </div>
    </div>
  );
};

export default Remaining;
