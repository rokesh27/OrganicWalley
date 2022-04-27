const mongoose = require("mongoose");
const addressSchema = new mongoose.Schema({
  Full_name: {
    type: String,
    required: true,
    unique:true,
  },
  Mobile: {
    type: Number,
    required: true,
    
  },
  email: {
    type: String,
    required: true,
  },
  Pincode: {
    type: Number,
    required: true,
  },
  comAdd: {
    type: String,
    required: true,
  },
  Town: {
    type: String,
    required: true,
  },
  District: {
    type: String,
    required: true,
  },
  State: {
    type: String,
    required: true,
  },
});
exports.UserAddress = mongoose.model("UserAddress", addressSchema);