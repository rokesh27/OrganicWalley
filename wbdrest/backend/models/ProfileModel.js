const mongoose =  require("mongoose");
const userProfile = new mongoose.Schema({
    
        profileImg: {
            type: String
        }
    },)
exports.Profile = mongoose.model("Profile", userProfile);