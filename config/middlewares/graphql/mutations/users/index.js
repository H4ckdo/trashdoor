let { GraphQLObjectType, GraphQLString } = require('graphql');
const create = require('./create.js');
const update = require('./update.js');
const login = require('./login.js');

module.exports =  {
  args: {
    name: { type: GraphQLString }
  },
  resolve(root, args) {
    return {}
  },
  type: new GraphQLObjectType({
    name: 'userMethods',
    fields: {
      create,
      update,
      login
    }
  })
}
