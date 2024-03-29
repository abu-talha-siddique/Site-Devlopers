import slugify from "slugify";
import categoryModel from "../models/categoryModel.js";
export const createcategoryController=async(req,res)=>{
  try{
   const {name}=req.body;
   if(!name){
    return res.status(401).send({message:'Name is required'});

   }
   const existingcategory=await categoryModel.findOne({name});
   if(existingcategory){
    return res.status(200).send({
      success:false,
      message:'category Already Exists',
      
    })
  }
  const category=await new categoryModel({name,slug:slugify(name)}).save()
  
  res.status(201).send({
    success:true,
    message:'New category added',
    category,
  
  })
  }
  catch(error){
    console.log(error)
   res.status(500).send({
    success:false,
    message:'Error in category',
    error,

   })
  }
}
//updatecategory
export const updatecategoryController=async(req,res)=>{
try{
  const {name}=req.body;
  const {id}=req.params;  //getting from url
  const category=await categoryModel.findByIdAndUpdate(id,{name,slug:slugify(name)}, {new:true});
  res.status(200).send({
    success:true,
    message:"Successfully Updated",
    category,
  });


}
catch(error){
  console.log(error)
  res.status(500).send({
   success:false,
   message:'Error in Updating category',
   error,

})
}
}
///get category
export const categoryController=async(req,res)=>{
  try{
    const category=await categoryModel.find({});
    res.status(200).send({
      success:true,
      message:"All categories List",
      category
    })

  }
  catch(error){
    console.log(error)
  res.status(500).send({
   success:false,
   message:'Error while gettong category',
   error,

})

  }

}
//single category
export const  singlecategoryController=async(req,res)=>{
  try{
    
    const category =await categoryModel.findOne({slug:req.params.slug});
    res.status(200).send({
      success:true,
      message:"A cateogies",
      category
    })


  }
  catch(error){
    console.log(error)
  res.status(500).send({
   success:false,
   message:'Error while gettong  single category',
   error,

})

  }

}

//delete controller
export const  deletecategoryController=async(req,res)=>{
  try{
    const {id}=req.params
  await categoryModel.findByIdAndDelete(id)
    res.status(200).send({
      success:true,
      message:" successfully Deleted",
    
    })


  }
  catch(error){
    console.log(error)
  res.status(500).send({
   success:false,
   message:'Error while deleting cateogrey',
   error,

})

  }

}