const express=require('express')
const dotenv=require('dotenv');
const mongoose=require('mongoose');
const imageRoute=require('./routes/image')
const userRoute=require('./routes/user')
const foodRoute=require('./routes/food')
const orderRoute=require('./routes/order')
const app=express();
dotenv.config();
const cors=require('cors');

const port=process.env.PORT 
app.use(cors());
app.use(express.json());
app.get('/',(req,res)=>{
    res.send('Hello');
});


// connect to database
const connect=async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected ")
    }
    catch(error){
        throw error;
    }
};
mongoose.connection.on("disconnected",()=>{
    console.log('disconnected');
    
})
mongoose.connection.on("connected",()=>{
    console.log('connected');
});

app.use('/api/vl/all',imageRoute)
app.use('/api/vl/user',userRoute)
app.use('/api/vl/food',foodRoute)
app.use('/api/v1/order',orderRoute)

app.use(express.json({limit:"3mb"}))
app.listen(port,()=>{
    connect();
    console.log(`Listening from ${port}`);
    
})
// **********************************************************

// const express=require('express')
// const dotenv=require('dotenv')

// const mongoose=require('mongoose')
// const imageRoute=require('./routes/image')
// const userRoute=require('./routes/user')
// const foodRoute=require('./routes/food')
// const app=express()
// dotenv.config()
// const cors=require('cors')
// const port=process.env.PORT

// app.use(express.json())
// app.use(cors())
// app.get('/',(req,res)=>{
//     res.send('Hello')
// })

// const connect =async(req,res)=>{
//     try{
//         await mongoose.connect(process.env.MONGO_URI)
//         console.log("Connnected")
//     }
//     catch(error){
//         throw error
//     }
// };
// mongoose.connection.on("Connected",()=>{
//     console.log("Connected")
// })

// mongoose.connection.on("Disconnected",()=>{
//     console.log("Disconnected")
// })

// app.use('/api/v1/all',imageRoute)
// app.use('/api/v1/all/user',userRoute)
// app.use('/api/v1/all/food',foodRoute)

// app.use(express.json({limit:"3mb"}))
// app.listen(port,()=>{
//     connect()
//     console.log(`Listening on port number ${port}`)
// })
