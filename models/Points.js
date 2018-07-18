const Schema = mongoose.Schema;
const { validWord } = require('../client/shared/validator.js');

const PointsSchema = new Schema({
  lat: {
    type: Number
  },
  lon: {
    type: Number
  }
})

PointsSchema.virtual('markedBy', {
  ref: 'Users', // The model to use
  localField: '_id', // Find people where `localField`
  foreignField: 'points', // is equal to `foreignField`
  // If `justOne` is true, 'members' will be a single doc as opposed to
  // an array. `justOne` is false by default.
  justOne: false
});

module.exports = mongoose.model('Points', PointsSchema);
