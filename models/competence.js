const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const competencesSchema = new Schema({
skillName:{
  type:String,
  required:true
},
userArray:[
  {
    _id : false,
    profileID:{type:Schema.Types.ObjectId,ref:"Profile"},
    level:{type:Number},
    available:{
      type:Boolean,
      default:true
    }
}]
});

module.exports = mongoose.model("Competence", competencesSchema);