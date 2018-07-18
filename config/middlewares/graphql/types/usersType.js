module.exports = new GraphQLObjectType({
  name: 'usersType',
  description: '....',
  fields: () => ({
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    userName: { type: GraphQLString },
    createAt: { type: GraphQLString },
    id: { type: GraphQLID }
    //id: { type: new GraphQLNonNull(GraphQLID) }
  })
})
