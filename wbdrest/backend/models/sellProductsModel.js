const mongoose =  require("mongoose");
const sellProductsSchema = new mongoose.Schema({
    Full_name: {
    type: String,
    required: true,
    unique: true,
  },
  type: {
    type: String,
    required: true,
    
  },
  Qty: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  discount: {
    type: Number,
    required: true,
  },
  desc: {
    type: String,
    required: true,
  },
  Image : {
    type: String,
    required: true,
  },
  SoldbyEmail:{
      type:String,
      required:false
  },
  SoldbyUserName:{
      type:String,
      required:false,
  },
});
exports.sellProducts = mongoose.model("sellProducts", sellProductsSchema);