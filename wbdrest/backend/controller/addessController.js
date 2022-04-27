const { UserAddress } = require("../models/addressModel");

exports.createNewAddress = async (req, res) => {
  try {
    console.log("req.body");
    console.log(req.body);
    const Address = await UserAddress.create(req.body);
    res.status(201).json({
      message: "User Address created",
      data: Address,
    });
  } catch (error) {
    console.log("error in creating the User: ", error);
    res.status(400).end();
  }
};

exports.getAllAddress = async (req, res) => {
    try {
      const address = await UserAddress.find({});
      res.status(200).json({
        message: "all users retreived",
        data: address,
      });
    } catch (error) {
      console.log("error in getting all of the users: ", error);
      res.status(500).end();
    }
  };

exports.getAddressesById = async (req, res) => {
  try {
    const AddressId = req.params.uid;
    const Address = await UserAddress.findById(AddressId);
    res.status(200).json({
      message: "Address retreived",
      data: Address,
    });
  } catch (error) {
    console.log("error in fetching the User: ", error);
    res.status(400).end();
  }
};

exports.updateAddress = async (req, res) => {
  try {
    const AddressId = req.params.uid;
    const Address = await UserAddress.findByIdAndUpdate(AddressId, req.body, {
      new: true,
    });
    if (!Address) {
      res.status(404).json({ message: "User Not Found" });
    }
    res
      .status(200)
      .json({ message: "User Address updated sucessfully", Address });
  } catch (error) {
    console.log("error in update the User Address: ", error);
    res.status(500).end();
  }
};

exports.deleteAddress = async (req, res) => {
  try {
    // const userId = "";
    const AddressId = req.params.uid;

    const Address = await UserAddress.findByIdAndDelete(AddressId);
    res.status(200).json({
      message: "deleted User Address sucessfully",
    });
  } catch (error) {
    console.log("error in deleting the User Address: ", error);
    res.status(500).end();
  }
}