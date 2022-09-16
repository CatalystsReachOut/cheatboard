import CheatBoard from "../models/cheatBoardModel.js"
import bigPromise from "../middlewares/bigPromise.js"

export const generateCheatcode=bigPromise(async(req,res,next)=>{
    const {text}=req.body;
    if(!text){
       return res.status(400).json({
            success:false,
            message:"Text field is requireed !"
        })
    }

    function generate(n) {
        var add = 1, max = 12 - add;   // 12 is the min safe number Math.random() can generate without it starting to pad the end with zeros.   
        
        if ( n > max ) {
                return generate(max) + generate(n - max);
        }
        
        max        = Math.pow(10, n+add);
        var min    = max/10; // Math.pow(10, n) basically
        var number = Math.floor( Math.random() * (max - min + 1) ) + min;
        return ("" + number).substring(add); 
    }

    const cheatcode = generate(4);
    
    
    const content = await CheatBoard.create({
        text,
        cheatcode
    })

    res.status(200).json({
        success:true,
        message:"Text generated !",
        code:cheatcode
    })
})


export const fetchTextFromCode=bigPromise(async(req,res,next)=>{
    const { cheatcode } = req.query;
    if(!cheatcode){
        return res.status(400).json({
            success:false,
            message:"Please enter code to fetch text !"
        })
    }
    const text = await CheatBoard.find({cheatcode:cheatcode})
    // console.log(text)

    return res.status(200).json({
        success:true,
        message:"decoded successfully",
        data:text[0]["text"]
    })


})
