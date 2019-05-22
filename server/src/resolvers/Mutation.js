const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { getUserId } = require("../utils");
// require("dotenv").config();
console.log("APP SECRET: ", process.env.APP_SECRET);

function createNewUser(parent, { username, email }, context) {
  return context.prisma.createUser({
    username,
    email
  });
}

function deleteUserById(parent, { id }, context) {
  return context.prisma.deleteUser({ id });
}

function createNewPlace(parent, { title, latitude, longitude }, context) {
  const userId = getUserId(context); //Auth check
  return context.prisma.createPlace({
    title,
    latitude,
    longitude,
    owner: {
      connect: { id: userId }
    }
  });
}

async function signup(parent, args, context) {
  console.log("reached", args);
  const password = await bcrypt.hash(args.password, 10);
  console.log("reached", args);
  const user = await context.prisma.createUser({ ...args, password });
  const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
  console.log("User", user);
  console.log("token", token);
  return {
    token,
    user
  };
}

async function login(parent, args, context) {
  const user = await context.prisma.user({ email: args.email });
  if (!user) {
    throw new Error(`No such user found with email: ${args.email}`);
  }

  const valid = await bcrypt.compare(args.password, user.password);
  if (!valid) {
    throw new Error(`Invalid password`);
  }
  const token = jwt.sign({ userId: user.id }, process.env.APP_SECRET);
  return {
    token,
    user
  };
}
module.exports = {
  createNewUser,
  createNewPlace,
  deleteUserById,
  signup,
  login
};
