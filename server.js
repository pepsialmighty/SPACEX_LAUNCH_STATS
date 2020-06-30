const express = require("express");
const graphqlHTTP = require("express-graphql");
const cors = require("cors");
const schema = require("./schema");
const path = require("path");

/* 
 import express from "express";
 import graphqlHTTP from "express-graphql";
 import schema from "./schema"; 
*/

//initialize express
const app = express();

//Allow cross-origin
app.use(cors());

/**
 * ! declare an endpoint /graphql that run graphqlHTTP that
 * ! point to our schema
 * !graphiql is a tool that act like a client to make request
 * ! to our server */

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

/**
 * ! set a static folder 'public'
 */
app.use(express.static("public"));

/**
 * ! any route except /graphql hit, it will be redirected back
 * ! to index.html in public folder
 * ? __dirname : from the current directory, then go to public then index.html
 */
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
