const mongoose =  require("mongoose");
const userSchema = new mongoose.Schema({
    Full_name: {
    type: String,
    required: true,
    unique:true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  psw: {
    type: String,
    required: true,
  },
  

});
exports.User = mongoose.model("User", userSchema);