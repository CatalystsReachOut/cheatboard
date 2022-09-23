import { text } from "express";
import mongoose from "mongoose";

const cheatBoardSchema= new mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    cheatcode:{
        type:Number
    },
    customcode:{
        type:String,
        minlength:1,
        maxlength:6
    },
    expireAt: {
        type: Date,
        default: Date.now,
        index: { expires: '2m' },
      },
},
    {timestamps:true}
);




cheatBoardSchema.pre("save",async function(next){
    console.log(this)
})

const CheatBoard=mongoose.model("CheatBoard",cheatBoardSchema);


export default CheatBoard;