const express = require('express')
const router = express.Router()
const {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
  getByEmail,
} =  require("../controller/userController.js");
router.route("/email/:emailId").get(getByEmail)
router.route("/:uid").get(getUser).delete(deleteUser).patch(updateUser);

router.route("/")
.get(getAllUsers)
.post(createUser);
module.exports = router;