function ownedBy(parent, args, context) {
  return context.prisma.place({ id: parent.id }).ownedBy();
}

module.exports = {
  ownedBy
};
