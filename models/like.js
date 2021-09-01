var mongoose = require("mongoose");

//userSchema
var likeSchema = mongoose.Schema({

    
      userid: {
        type: String,
        required: true,
      },
      likes: {
        type: Number,
        required: true,
      },
})
module.exports = mongoose.model("Like", likeSchema);


