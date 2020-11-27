/**
 * Required External Modules
 */

const express = require("express");
const cors = require("cors");
const path = require("path");
const helmet = require("helmet");
const { clientOrigins, serverPort } = require("./config/env.dev");
const connectDB = require("../Db/db");
const { messagesRouter } = require("./messages/messages.router");

/**
 * App Variables
 */
connectDB();
const app = express();
const apiRouter = express.Router();

const transactions = require('./routes/transactions')
/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors({ origin: clientOrigins }));
app.use(express.json());


app.use("/api", apiRouter);

app.use('/api/v1/transactions', transactions);

apiRouter.use("/messages", messagesRouter);

app.use(function (err, req, res, next) {
  console.log(err);
  res.status(500).send(err.message);
});

/**
 * Server Activation
 */

app.listen(serverPort, () =>
  console.log(`API Server listening on port ${serverPort}`)
);
