const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const User=require('../model/User')
const otpGenerator=require('otp-generator');
const nodemailer=require('nodemailer')

const registerController=async(req,res)=>{

    try{
        const existingUser=await User.findOne({email:req.body.email});
        if(existingUser){
            return res.status(200).send({
                message:"User already exists",
                success:false,
            });
        }

        const password=req.body.password
        const salt=await bcrypt.genSalt(10);
        const hashPassword=await bcrypt.hash(password,salt)
        req.body.password=hashPassword

        const confirmPassword=await bcrypt.hash(req.body.passwordConfirm,salt);

        const otp=otpGenerator.generate(6,{
            digits:true,
            upperCase:false,
            specialChars:false,
            upperCaseAlphabets:false,
            lowerCaseAlphabets:false,
        });

        req.body.passwordConfirm=confirmPassword;
        if(req.body.passwordConfirm===req.body.password){
            const newUser=new User({
                name:req.body.name,
                email: req.body.email,
                profileImage: req.body.profileImage,
                password: req.body.password,
                passwordConfirm:req.body.passwordConfirm,
                otp:otp,
            });

            await newUser.save();
            const token=jwt.sign({id:newUser._id},process.env.JWT_SECRET,{
                expiresIn:"1d",
            });

            const transporter=nodemailer.createTransport({
                service:"Gmail",
                auth:{
                    user:mail_id,
                    pass:mail_api_pass,
                },
            });

            const mailOptions={
                from:"Auth Client Restraunt",
                to:req.body.email,
                subject:"Otp for email verification",
                text:`Your otp for verification is ${otp}`,
            };

        transporter.sendMail(mailOptions,(error,info)=>{
            if(error){
                console.log(error);
                return res.status(500).send("Error sending email...")
            }
            res.send({
                message:"Otp sent to email",
            });
        });
        return res.status(201).send({
            message:"Registration successful",
            data:{
                user:newUser,
                token,
            },
            success:true,
        });
        
    }
    else{
        return res.status(201).send({
            message:"Password does not match",
            success:false,
        });
    }
    }
    catch(error){
        console.log(error);

        return res.status(500).send({
            message:"Registration error",
            success:false,
        });
    }

};

const authController=async(req,res)=>{
    try{
       const user= await User.findOne({_id:req.body.userId})
       if(!user){
        return res.status(200).send({
            message:"User not found",
            success:false,
        })
       }
       else{
        // console.log(user);
        return res.status(200).send({
            message:"Registration successful",
            data:{
                user,
            },
            success:true,
        })
       }
    }
    catch(error)
    {
        console.log(error)
        res.status(500).send({
            success:false,
            message:`Auth error`
        })
    }

}

const loginController=async(req,res)=>{ 
    try{
        // console.log(req.body)
        const user=await User.findOne({email:req.body.email}).select("+password")
        if(!user){
            return res.status(200).send({
                message:"User not found",
                success:false,
            });
        }

        const isMatch=await bcrypt.compare(req.body.password,user.password)
        const signuser=await User.findOne({email:req.body.email})
        if(!isMatch){
            return res.status(200).send({
                success:false,
                message:"Invalid password and email"
            })
        }

        const token=jwt.sign({id:signuser._id},process.env.JWT_SECRET,{
            expiresIn:"1d",
        });
        return res.status(201).send({
            message:"Login successful",
            data:{
                user:signuser,
                token,
            },
            success:true,

        })
    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:`Auth error`
        })
    }
}

const verifyOtpController=async(req,res)=>{
    try{
        const user=await User.findOne({email:req.body.email});
        // console.log("user.otp:", user.otp);
        // console.log("req.body.combinedOtp:", req.body.combinedOtp);
        if(user.otp===req.body.combinedOtp){
            user.isVerified=true;
            await user.save();
                res.status(200).send({
                success:true,
                message:`otp verified`,
        });
        }
        else{
            res.status(200).send({
            success:false,
            message:`otp not verified`,
            });
        }
    }
    catch(error){
        console.log(error)
        res.status(500).send({
            success:false,
            message:`Failed to verified`,
        })
    }
}



const updateUserProfile=async(req,res)=>{
    try{
        const {name,profileImage,userId,email,street,state,country,city,zipCode}=req.body
        const user=await User.findById(userId);
        if(!user){
            return res.status(200).send({
                message:"User not found",
                success:false,
            })
        }
        user.name=name || user.name
        user.profileImage=profileImage || user.profileImage
        user.street=street || user.street
        user.city=city || city
        user.state=state || user.state
        user.zipCode=zipCode || user.zipCode
        user.country=country || user.country

        await user.save()
        return res.status(201).send({
            message:"Profile Updated Successfully",
            success:true,
        })
    }
    catch(error){
        console.log(error)
        return res.status(200).send({
            message:"User Error",
            success:false,
        })
    }
}
module.exports={registerController,authController,loginController,verifyOtpController,updateUserProfile};


