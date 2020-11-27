import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

// Initial state
const initialState = {
  transactions: [],
  error: null,
  loading: true,
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const { user } = useAuth0();

  // Actions
  async function getTransactions() {
    try {
      const uqid = user.email;
      const res = await axios.get(`http://localhost:6060/api/v1/${uqid}`);

      dispatch({
        type: "GET_TRANSACTIONS",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        // payload: err.response.data.error,
      });
    }
  }

  async function deleteTransaction(id) {
    try {
      const uqid = user.email;
      await axios.delete(`http://localhost:6060/api/v1/transactions/${uqid}`);

      dispatch({
        type: "DELETE_TRANSACTION",
        payload: uqid,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        // payload: err.response.data.error,
      });
    }
  }

  async function addTransaction(transaction) {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const res = await axios.post("http://localhost:6060/api/v1/transactions", transaction, config);

      dispatch({
        type: "ADD_TRANSACTION",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "TRANSACTION_ERROR",
        // payload: err.response.data.error,
      });
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        error: state.error,
        loading: state.loading,
        getTransactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
