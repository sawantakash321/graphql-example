const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();

//allow cross-origin requests
app.use(cors());

mongoose.connect(
  "mongodb://akash:dontbelazy321@ds139341.mlab.com:39341/graphql-ninja"
);
mongoose.connection.once("open", () => {
  console.log("connected to database");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);
app.listen(4000, () => {
  console.log("Now listening for requests  on port 4000");
});
