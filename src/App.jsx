import React from "react";
import BudgetStats from "./components/BudgetStats";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";

import { AppContextProvider } from "./store/context";

const App = () => {
  return (
    <AppContextProvider>
      <BudgetStats />
      <ExpenseForm />
      <ExpenseList />
    </AppContextProvider>
  );
};

export default App;
