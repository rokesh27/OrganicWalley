const express = require('express')
const router = express.Router()
const {
    getAllProducts,
    addProducts,
    updateProduct,
    deleteProduct,
    getProductById,
    getByEmail,
    getProducts,
} =  require("../controller/sellProductsController");
router.route("/:uid").get(getProductById).delete(deleteProduct).patch(updateProduct);
router.route("/email/:emailId").get(getByEmail)
router.route("/")
.get(getAllProducts)
.post(addProducts)
.get(getProducts)
module.exports = router;