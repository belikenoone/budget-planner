import React from "react";
import Remaining from "./Budget/Remaining";
import Spent from "./Budget/Spent";
import TotalBudget from "./Budget/TotalBudget";

const BudgetStats = () => {
  return (
    <div className="w-[75%] mx-auto grid lg:grid-cols-3 gap-4 md:grid-cols-1 my-9">
      <TotalBudget />
      <Remaining />
      <Spent />
    </div>
  );
};

export default BudgetStats;
