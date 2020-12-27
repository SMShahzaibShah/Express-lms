var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var pateintSchema = new Schema(
    {
        ID:{
            type: Number,
            required:true
        },
        lastvisit:{
            type:String,
            required:true
        },
        prescription:{
            type:String,
            required:true
        }
    }
);
module.exports=mongoose.model('Pateint',pateintSchema)