const cloudinary=require('cloudinary');
cloudinary.config({
    cloud_name:process.env.cloud_name_API,
    api_key:process.env.api_key_API,
    api_secret:process.env.api_secret_API,
});

const imageUploadController=async(req,res)=>{
    try{
        const result=await cloudinary.uploader.upload(req.files.image.path)
        res.json({
            url:result.secure_url,
            public_id:result.public_id,
        });
    }
    catch(error){
        console.log(error);
        
    }
};

module.exports={imageUploadController}

// const cloudinary=require('cloudinary')
// cloudinary.config({
//     cloud_name:"dlvplsrqv",
//     api_key:"556743134463841",
//     secret_key:"u6ETvbZBf0a6Xcb6YY6BvCRDRj4",
// })

// const imageUploadController=async(req,res)=>{
//     try{
//         const result=await cloudinary.uploader.upload(req.files.image.path)
//         res.json({
//             url:result.secure_url,
//             public_id:result.public_id,
//         })

//     }

//     catch(error){
//         console.log(error)
//     }

// }

// module.exports={imageUploadController}
