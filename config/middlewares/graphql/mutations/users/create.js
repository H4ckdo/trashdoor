let {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInputObjectType,
  GraphQLError
} = require('graphql');
const usersType = require('../../types/usersType.js');

const resolve = async (root, args) => {
  let {ok, result, error} = await Users.saveUser(args);
  debugger;
  if(ok) return result;
  return error;
}

const args = {
  password: { type: new GraphQLNonNull(GraphQLString) },
  userName: { type: new GraphQLNonNull(GraphQLString) },
  fullName: { type: GraphQLString }
}

module.exports = {
  type: usersType,
  args,
  resolve
}
