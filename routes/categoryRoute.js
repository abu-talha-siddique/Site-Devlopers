import express from 'express'
import { isadmin, requireSignin } from '../middlewares/authMiddleware.js';
import { categoryController, createcategoryController, deletecategoryController, singlecategoryController, updatecategoryController } from '../controllers/categoryController.js';

const router=express.Router();
//create route
router.post('/createmycategory',requireSignin,isadmin,createcategoryController);
export default router;
router.put('/update-category/:id',requireSignin,isadmin,updatecategoryController);
router.get('/get-category',categoryController);
//single Cateogries
router.get('/single-category/:slug',singlecategoryController);
router.delete('/delete-category/:id',requireSignin,isadmin, deletecategoryController);