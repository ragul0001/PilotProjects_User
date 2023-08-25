const express=require("express");
const router=express.Router();
const userController=require('../Controller/userController');

router.get('/user',userController.getAllUsers);

module.exports=function router(app){
     app.use('/userRoutes',router)
}