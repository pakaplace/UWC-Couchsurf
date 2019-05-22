async function places(parent, args, context) {
  return context.prisma.places();
}
async function place(parent, { id }, context) {
  return context.prisma.place({ id });
}
async function users(parent, args, context) {
  return context.prisma.users();
}
async function user(parent, { id }, context) {
  return context.prisma.user({ id });
}
async function placesByUser(parent, { id }, context) {
  //userId not  placeId
  return context.prisma.places({ id });
}

module.exports = {
  places,
  place,
  users,
  user,
  placesByUser
};
