const { GraphQLServer } = require("graphql-yoga");
const { prisma } = require("./generated/prisma-client");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const Query = require("./resolvers/Query");
const Mutation = require("./resolvers/Mutation");
const User = require("./resolvers/User");
const Place = require("./resolvers/Place");

const resolvers = {
  Query,
  Mutation,
  User,
  Place
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers,
  context: request => {
    return {
      ...request,
      prisma
    };
  }
});

server.start(() => console.log("Server is running on http://localhost:4000"));
// server.express.use(myMiddleware())
// server.express.post(server.options.endpoint, myMiddleware())
