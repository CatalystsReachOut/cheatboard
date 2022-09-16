import mongoose from "mongoose";

const cheatBoardSchema= new mongoose.Schema({
    text:{
        type:String,
        required:true
    },
    cheatcode:{
        type:Number
    }
},
    {timestamps:true}
);




cheatBoardSchema.pre("save",async function(next){
    console.log(this)
})

const CheatBoard=mongoose.model("CheatBoard",cheatBoardSchema);


export default CheatBoard;