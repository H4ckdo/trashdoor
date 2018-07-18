const usersType = require('../../types/usersType.js');
const update = require('../../mutations/users/update.js');

const args = {
  password: { type: new GraphQLNonNull(GraphQLString) },
  userName: { type: new GraphQLNonNull(GraphQLString) }
}

const resolve = async function (root, args) {
  let { userName = null, password = false } = args;
  let { ok, error = {}, result } = await Users.login({ userName, password });
  return {
    ok,
    error: error.message || ''
  }
}

module.exports = {
  type: new GraphQLObjectType({
    name: 'response',
    fields: {
      ok: { type: GraphQLBoolean },
      error: { type: GraphQLString },
    },
    resolve() {
      return {}
    }
  }),
  args,
  resolve
}
