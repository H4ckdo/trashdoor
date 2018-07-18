module.exports = new GraphQLObjectType({
  name: 'ponitsType',
  description: '....',
  fields: () => ({
    description : { type: GraphQLString },
    type: { type: GraphQLString },
    lat: { type: GraphQLFloat },
    lon: { type: GraphQLFloat },
    id: { type: GraphQLID }
    //id: { type: new GraphQLNonNull(GraphQLID) }
  })
})
