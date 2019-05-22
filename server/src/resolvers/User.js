function places(parent, args, context) {
  return context.prisma.user({ id: parent.id }).places();
}

module.exports = {
  places
};
