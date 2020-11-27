import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../../context/GlobalState';
import { numberWithCommas } from '../../../utils/format';

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

  useEffect(() => {
    if (total < 0) document.getElementById('tot').style.color = 'red';
    else document.getElementById('tot').style.color = 'black';
  }, [total]);
  return (
    <>
      <h4>Your Balance</h4>
      <h1 id="tot">Rs. {numberWithCommas(total)}</h1>
    </>
  );
};
