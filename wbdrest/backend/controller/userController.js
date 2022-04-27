const { User } = require("../models/usersb");


exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json({
      message: "all users retreived",
      data: users,
    });
  } catch (error) {
    console.log("error in getting all of the users: ", error);
    res.status(500).end();
  }
};

exports.getByEmail = async (req, res) => {
  try {
  
    const UserInfo = await User.findOne({email:req.params.emailId});
    res.status(200).json({
      message: "User retrived",
      data: UserInfo,
    });
  } catch (error) {
    console.log("error in getting all of the Products: ", error);
    res.status(500).end();
  }
};

exports.createUser = async (req, res) => {
  try {
      console.log("req.body");
      console.log(req.body);
    const newUser = await User.create(req.body);
    res.status(201).json({
      message: "User created",
      data: newUser,
    });
  } catch (error) {
    console.log("error in creating the User: ", error);
    res.status(400).end();
  }
};

exports.getUser = async (req, res) => {
  try {
    const userId = req.params.uid;
    const Users = await User.findById(userId);
    res.status(200).json({
      message: "User retreived",
      data: Users,
    });
  } catch (error) {
    console.log("error in fetching the User: ", error);
    res.status(400).end();
  }
};

exports.updateUser = async (req, res) => {
  try {
    // make sure from the front-end that User is not updating the email, password
    // changing password might involve few additional steps
    // currently we can change any detail of the User
    const userId = req.params.uid;
    const Userb = await User.findByIdAndUpdate(userId, req.body, {
      new: true,
    });
    if (!Userb) {
      res.status(404).json({ message: "User Not Found" });
    }
    res.status(200).json({ message: "User updated sucessfully", Userb });
  } catch (error) {
    console.log("error in update the User: ", error);
    res.status(500).end();
  }
};

exports.deleteUser = async (req, res) => {
  try {
    // const userId = "";
    const userId = req.params.uid;

    const Userd = await User.findByIdAndDelete(userId);
    res.status(200).json({
      message: "deleted User sucessfully",
    });
  } catch (error) {
    console.log("error in deleting the User: ", error);
    res.status(500).end();
  }
  
};