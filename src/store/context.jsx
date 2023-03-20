import { createContext, useReducer, useState } from "react";
const AppContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXPENSE":
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    case "DELETE_EXPENSE":
      return {
        ...state,
        expenses: state.expenses.filter(
          (expense) => expense.id !== action.payload
        ),
      };
    case "SET_BUDGET":
      return {
        ...state,
        budget: action.payload,
      };
    default:
      state;
      break;
  }
};
export const AppContextProvider = ({ children }) => {
  const initialState = {
    budget: 5000,
    expenses: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const addExpense = (data) => {
    dispatch({ type: "ADD_EXPENSE", payload: data });
  };
  const deleteExpense = (data) => {
    dispatch({ type: "DELETE_EXPENSE", payload: data });
  };
  const setBudget = (amount) => {
    dispatch({ type: "SET_BUDGET", payload: amount });
  };
  return (
    <AppContext.Provider
      value={{
        expenses: state.expenses,
        budget: state.budget,
        addExpense,
        deleteExpense,
        setBudget,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
