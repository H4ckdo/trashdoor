const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
const { validWord, enumeration } = require('../client/shared/validator.js');
const { login, saveUser } = require('../helpers/usersMethods/index.js');

const UsersSchema = new Schema({
  rol: {
    type: String,
    validate: [{
      ...enumeration,
      validator: enumeration.validator.bind(this, [
        'superadmin',
        'admin',
        'user'
      ])
    }],
    default: 'user',
    required: true
  },
  userName: {
    type: String,
    required: true    
  },
  isLogin: {
    type: Boolean,
    default: false
  },
  email: {
    type: String,
    required: false,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  name: {
    type: String,
    /*validate: [validWord],*/
    unique: false,
    required: false
  },
  createAt: {
    type: Date,
    default: new Date()
  },
  points: [{ type: Schema.Types.ObjectId, ref: 'Points' }],//ref
})

UsersSchema.statics.saveUser = data => surePromise(
  saveUser(data)
)

UsersSchema.statics.login = data => surePromise(
  login(data)
)

module.exports = mongoose.model('Users', UsersSchema);
