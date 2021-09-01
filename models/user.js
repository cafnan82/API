var mongoose = require("mongoose");

//userSchema
var userSchema = mongoose.Schema({

      userid: {
        type: String,
        required: true,
      },    
      name: {
        type: String,
        required: true,
      },
})
module.exports = mongoose.model("User", userSchema);


