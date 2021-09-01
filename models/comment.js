var mongoose = require("mongoose");

//userSchema
var commentSchema = mongoose.Schema({

    
      userid: {
        type: String,
        required: true,
      },
      comments: {
        type: String,
        required: true,
      },
})
module.exports = mongoose.model("Comment", commentSchema);


