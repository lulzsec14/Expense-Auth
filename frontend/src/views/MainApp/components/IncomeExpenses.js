import React, { useContext } from 'react';
import { GlobalContext } from '../../../context/GlobalState';
import { numberWithCommas } from '../../../utils/format';
import { Pie, Doughnut } from 'react-chartjs-2';

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);

  const income = amounts
    .filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = (
    amounts.filter((item) => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  const state = {
    labels: ['Income', 'Expense'],
    datasets: [
      {
        backgroundColor: ['#2ecc71', '#c0392b'],

        data: [income, expense]
      }
    ]
  };

  return (
    <>
      <div className="row mt-5">
        <div className="col-md-6 pt-5">
          <div className="inc-exp-container mt-5">
            <div>
              <h4>Income</h4>
              <p className="money plus">${numberWithCommas(income)}</p>
            </div>
            <div>
              <h4>Expense</h4>
              <p className="money minus">${numberWithCommas(expense)}</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <Doughnut
            data={state}
            options={{
              title: {
                display: true,
                text: 'Expense Chart',
                fontSize: 20
              },
              legend: {
                display: true,
                position: 'right'
              }
            }}
          />
        </div>
      </div>
    </>
  );
};
