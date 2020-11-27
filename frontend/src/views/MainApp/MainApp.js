import React from "react";

import {Balance} from './components/Balance'
import {Header} from './components/Header'
import {IncomeExpenses} from './components/IncomeExpenses'
import {TransactionList} from './components/TransactionList'
import {AddTransaction} from './components/AddTransaction'

import { GlobalProvider } from "../../context/GlobalState";

import "./MainApp.css";

function MainApp() {
  return (
    <div className="mainbg">
      <GlobalProvider>
        <div className="text-center">
          <Header />
        </div>
        <div className="container">
          <div className="text-right">
            <Balance />
          </div>
          <IncomeExpenses />
          <div className="row mt-5">
            <div className="col-md-6">
              <TransactionList />
            </div>
            <div className="col-md-6">
              <AddTransaction />
            </div>
          </div>
        </div>
      </GlobalProvider>
    </div>
  );
}

export default MainApp;
