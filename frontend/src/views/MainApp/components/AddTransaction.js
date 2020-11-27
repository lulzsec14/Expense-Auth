import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../../context/GlobalState';
import { useAuth0 } from "@auth0/auth0-react";

export const AddTransaction = () => {
  const [text, setText] = useState('');
  const [amount, setAmount] = useState(0);
  const { user } = useAuth0();

  const { addTransaction } = useContext(GlobalContext);
  let newTransaction = {
    uniqId: user.email,
    text,
    amount
  };
  const onSubmit = (e) => {
    e.preventDefault();
    var et = document.getElementById('etracker');
    if (et.value === 'in') {
      newTransaction = {
        uniqId: user.email,
        text,
        amount: +amount
      };
    } else {
      newTransaction = {
        uniqId: user.email,
        text,
        amount: -amount
      };
    }

    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add New Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Category</label>
          <input
            className="mb-3"
            type="text"
            value={text}
            onChange={(e) => {
              setText(e.target.value);
            }}
            placeholder="Enter category..."
          />
        </div>

        <div className="form-control">
          <label>Choose Type:</label>
          <select name="et" id="etracker" className="custom-select mb-3">
            <option value="in">Income</option>
            <option value="ex">Expense</option>
          </select>
        </div>

        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
          </label>
          <input
            className="mb-3"
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn">Add transaction</button>
      </form>
    </>
  );
};
