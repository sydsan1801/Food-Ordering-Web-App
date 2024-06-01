const mongoose = require("mongoose");

const reviewSchema=new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true,
    },
    rating:{
        type:Number,
        required:true,
        min:1,
        max:5,
    },
    comment:{
        type:String,
        required:true,
    },
    createdAt:{
        type:Date,
        default:Date.now,

    }
})


const FoodSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    weight:{
        type:Number,
        required:true,
    },
    reviews:[reviewSchema],
    foodImage:{
        type:String,
        required:true,   
    },
},
    {timestamps:true}
)

module.exports=mongoose.model("Food",FoodSchema)