const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema");

/* import express from "express";
import graphqlHTTP from "express-graphql";
import schema from "./schema"; */

//initialize express
const app = express();

/* declare an endpoint /graphql that run graphqlHTTP that 
point to our schema */
/* graphiql is a tool that act like a client to make request
to our server */
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
