"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "UWC",
    embedded: false
  },
  {
    name: "GENDER",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  },
  {
    name: "Place",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://eu1.prisma.sh/public-wildgambler-359/UwcCouchsurf/dev`
});
exports.prisma = new exports.Prisma();
