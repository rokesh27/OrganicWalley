const express = require('express')
const router = express.Router();
const {
  createNewAddress,
  deleteAddress,
  getAllAddress,
  getAddressesById,
  updateAddress,
} = require("../controller/addessController");

router
  .route("/:uid")
  .get(getAddressesById)
  .delete(deleteAddress)
  .patch(updateAddress);
router.route("/").post(createNewAddress).get(getAllAddress);
module.exports = router;