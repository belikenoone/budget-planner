import React, { useContext, useState } from "react";
import AppContext from "../../store/context";

const TotalBudget = () => {
  const { budget, setBudget } = useContext(AppContext);
  const [isEditing, setIsEditing] = useState(false);
  const [newBudgetValue, setNewBudgetValue] = useState(0);
  const saveNewBudget = () => {
    setBudget(newBudgetValue);
    setIsEditing(false);
  };
  return (
    <div
      className={`${
        isEditing ? "bg-bluelight" : "bg-whitish"
      }  flex  px-4 py-3 items-center rounded-lg gap-3 justify-between`}
    >
      {isEditing ? (
        <>
          <input
            type="number"
            placeholder="Enter Budget"
            value={newBudgetValue}
            onChange={(e) => setNewBudgetValue(e.target.value)}
            className="py-3 px-2 rounded-lg"
          />
          <button
            onClick={saveNewBudget}
            className="bg-whitish py-2 px-4 rounded-xl text-black hover:scale-110"
          >
            Save
          </button>
        </>
      ) : (
        <>
          <div className="flex flex-col ">
            <span className="text-4xl font-light text-black">Budget</span>
            <span className="text-5xl text-white">${budget}</span>
          </div>
          <button
            className="bg-purple py-2 px-4 rounded-xl text-whitish hover:scale-110"
            onClick={() => setIsEditing(true)}
          >
            Edit
          </button>
        </>
      )}
    </div>
  );
};

export default TotalBudget;
