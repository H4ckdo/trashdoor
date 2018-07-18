let {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInputObjectType
} = require('graphql');
const messagesType = require('../../types/messagesType.js');

const resolve = async (root, args) => {
  args.state = "SENDING";
  return {name:"Nuevo done"}
  //return await Messages.create(args);
}

const args = {
  text: { type: GraphQLString }
}

module.exports = {
  type: messagesType,
  args,
  resolve
}
