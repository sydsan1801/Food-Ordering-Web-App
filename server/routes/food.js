const express=require('express')
const protect=require('../middleware/authMiddleware')
const {createFood,getAllFoods, getFoodById,getNewFoods, getFoodFromDistinctCategory,getTopRating}=require('../controller/food')

router=express.Router()
router.post('/addfood',protect,createFood)
router.get('/getAllFood',getAllFoods)
// router.get('/getAllFood',getAllFood)
router.get('/getNewFoods',getNewFoods)
router.get('/getTopRated',getTopRating)
router.get('/specialFood',getFoodFromDistinctCategory)
router.get('/getFood/:id',getFoodById)

module.exports=router

