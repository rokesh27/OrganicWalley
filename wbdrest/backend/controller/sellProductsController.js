const { sellProducts } = require("../models/sellProductsModel");
exports.getAllProducts = async (req, res) => {
  try {
    const Products = await sellProducts.find({type:req.query.type});
    res.status(200).json({
      message: "all Products retreived",
      data: Products,
    });
  } catch (error) {
    console.log("error in getting all of the Products: ", error);
    res.status(500).end();
  }
};

exports.getProducts = async (req,res)=>{
  try {
    const Products = await sellProducts.find({});
    res.status(200).json({
      message: "all Products retreived",
      data: Products,
    });
  } catch (error) {
    console.log("error in getting all of the Products: ", error);
    res.status(500).end();
  }
}
exports.getByEmail = async (req, res) => {
  try {
    const Products = await sellProducts.find({SoldbyEmail:req.params.emailId});
    res.status(200).json({
      message: "all Products of user retrived",
      data: Products,
    });
  } catch (error) {
    console.log("error in getting all of the Products: ", error);
    res.status(500).end();
  }
};


exports.addProducts = async (req, res) => {
  try {
      console.log("req.body");
      console.log(req.body);
    const Product = await sellProducts.create(req.body);
    res.status(201).json({
      message: "new Product added",
      data: Product,
    });
  } catch (error) {
    console.log("error in creating the User: ", error);
    res.status(400).end();
  }
};


exports.updateProduct = async (req, res) => {
  try {
    const productId = req.params.uid;
    const products = await sellProducts.findByIdAndUpdate(productId, req.body, {
      new: true,
    });
    if (!products) {
      res.status(404).json({ message: "Product Not Found" });
    }
    res.status(200).json({ message: "Product Details updated sucessfully", products });
  } catch (error) {
    console.log("error in update the Product Details: ", error);
    res.status(500).end();
  }
};

exports.deleteProduct = async (req, res) => {
  try {
    const productId = req.params.uid;

    const Product = await sellProducts.findByIdAndDelete(productId);
    res.status(200).json({
      message: "deleted Address sucessfully",
    });
  } catch (error) {
    console.log("error in deleting the User: ", error);
    res.status(500).end();
  }
  
};




exports.getProductById = async (req, res) => {
    try {
      const productId = req.params.uid;
      const product = await sellProducts.findById(productId);
      res.status(200).json({
        message: "Product retreived",
        data: product,
      });
    } catch (error) {
      console.log("error in fetching the product: ", error);
      res.status(400).end();
    }
  };