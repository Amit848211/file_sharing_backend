import mongoose from "mongoose";



const fileSchema = mongoose.Schema({
    path:{type:String,require:true},
    name:{type:String,require:true},
    downLoad:{type:Number,require:true,default:0}
})

const File = mongoose.model("file",fileSchema)


export default File;