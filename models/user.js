const mongoose= require('mongoose'),
      uniqueValidator = require('mongoose-unique-validator');
const userSchema = mongoose.Schema({
    email: { type:String, required: true, unique: true},
    name: { type:String, required: true},
    dob: { type:String, required: true},
    app_name: { type: String, required: true},
    app_type: { type: String, required: true},
    api_key: { type: String, required: true, unique: true}
  });
userSchema.plugin(uniqueValidator);
module.exports = mongoose.model('user',userSchema);