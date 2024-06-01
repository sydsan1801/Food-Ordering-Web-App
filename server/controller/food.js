const Food =require('../model/Food')
const createFood=async(req,res)=>{
    try{
        console.log(req.body);

        // const {name,price,description,category,weight,foodImage}=req.body;
        // const newFood =new Food ({
            //     name,price,description,category,weight,foodImage
            
            // });
            
        const newFood =new Food (req.body);
        const saveFood=newFood.save();
        res.status(200).json({
            message:"Food successfully added",
            success:true,
            data:{
                food:saveFood,
            }
        });
    }
    catch(error)
    {
        console.log(error)
        res.status(500).json({
            error:"Internal server error",
            success:false,

        })
    }
}

const getAllFoods=async(req,res)=>{
    try{
        const {category}=req.query;
        console.log(category)
        if(category==='all'){
        const foodItems=await Food.find()
        
         res.status(200).json({
            message:'Food items',
            success:true,
            data:{
                food:foodItems,
            }
        });  
        }
        else{
            const foodItems=await Food.find({category:category})
    
            res.status(200).json({
                message:'Food items',
                success:true,
                data:{
                    food:foodItems,
                }
            }); 

        }
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            error:'Internal error',
            success:false,
        })
    }
}

// const getAllFood=async(req,res)=>{
//     try{
//         const foodItems=await Food.find()
//         res.status(200).json({
//             message:'Food items',
//             success:true,
//             data:{
//                 food:foodItems,
//             }
//         });  
        
//     }
//     catch(error){
//         console.log(error);
//         res.status(500).json({
//             error:'Internal error',
//             success:false,
//         })

//     }
// }


const getNewFoods=async(req,res)=>{
    try{
        
        const foodItems=await Food.find().sort({createdAt:-1}).limit(12)
        
        res.status(200).json({
            message:'Showing 12 registered food',
            success:true,
            data:{
                food:foodItems,
            }
        });  
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            error:'Internal error',
            success:false,
        })
    }
}
const getFoodFromDistinctCategory=async(req,res)=>{
    try{
        
        const distinctCategory=await Food.distinct("category");
        const distinctFood=await Promise.all(
            distinctCategory.slice(0,4).map(async(category)=>{
                const food =await Food.findOne({category});
                return food;
            })
        )
        
        
        res.status(200).json({
            message:'4 different category food ',
            success:true,
            data:{
                food:distinctFood,
            }
        });  
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            error:'Internal error',
            success:false,
        })
    }
}
const getTopRating=async(req,res)=>{
    try{
        // Descending sort
        const topRatedFood=await Food.find().sort({'reviews.rating':-1}).limit(4)
        
        
        res.status(200).json({
            message:'4 different category food ',
            success:true,
            data:{
                food:topRatedFood,
            }
        });  
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            error:'Internal error',
            success:false,
        })
    }
    
}

const getFoodById=async(req,res)=>{
    try{
        const {id}=req.params;
       
        const foodItems=await Food.findById(id)
        
        res.status(200).json({
            message:'Food details',
            success:true,
            data:{
                food:foodItems,
            }
        });  
    }
    catch(error){
        console.log(error);
        res.status(500).json({
            error:'Internal error',
            success:false,
        })
    }
}

module.exports={createFood,getAllFoods,getFoodById,getNewFoods,getFoodFromDistinctCategory,getTopRating};