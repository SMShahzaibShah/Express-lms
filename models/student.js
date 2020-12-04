var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var studentSchema = new Schema({
    name:{
        type: String,
        require: true
    },
    rollno:{
        type: String,
        required: true
    }
});
module.exports = mongoose.model('Student', studentSchema);
