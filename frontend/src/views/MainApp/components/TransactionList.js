import React, { useContext, useEffect } from 'react';
import { Transaction } from './Transaction';
import { useAuth0 } from "@auth0/auth0-react";

import { GlobalContext } from '../../../context/GlobalState';

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext);
  const {user} = useAuth0();

  useEffect(() => {
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <h3>Transaction Details</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.user.email} transaction={transaction} />
        ))}
      </ul>
    </>
  );
};
