var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var TeacherSchema = new Schema(
    {
        name:{
            type:String,
            required:true
        },
        designation:{
            type:String,
            required:true
        }
    }
);
module.exports=mongoose.model('Teacher',TeacherSchema)