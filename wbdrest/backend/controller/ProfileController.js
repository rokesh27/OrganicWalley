const { Profile } = require("../models/ProfileModel");

exports.createProfile = async (req, res) => {
    try {
        console.log("req.body");
        console.log(req.body);
      const newProfile = await Profile.create(req.body);
      res.status(201).json({
        message: "profile fpic uploaded",
        data: newProfile,
      });
    } catch (error) {
      console.log("error in uploading pic: ", error);
      res.status(400).end();
    }
  };
  exports.getProfile = async (req, res) => {
    try {
      const Profile = await Profile.find({});
      res.status(200).json({
        message: "all Products retreived",
        data: Profile,
      });
    } catch (error) {
      console.log("error in getting all of the Products: ", error);
      res.status(500).end();
    }
  };