const express = require("express");
const createError = require("http-errors");
const morgan = require("morgan");
require("dotenv").config();
const echangeSchema = require("./schema/schema");
const bodyParser = require("body-parser");

const graphqlHTTP = require("express-graphql").graphqlHTTP;

const app = express();
app.use(bodyParser.json());
//app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(morgan("dev"));

// app.get("/", async (req, res, next) => {
//   res.send({ message: "Awesome it works 🐻" });
// });

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: echangeSchema,
  })
);

// app.use((req, res, next) => {
//   next(createError.NotFound());
// });

// app.use((err, req, res, next) => {
//   res.status(err.status || 500);
//   res.send({
//     status: err.status || 500,
//     message: err.message,
//   });
// });

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 @ http://localhost:${PORT}`));
