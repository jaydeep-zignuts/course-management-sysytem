const { render } = require('ejs');
const db =require('../models');


const Course_List=db.course_list;
 


const addCourse= async (req,res)=>{
  let data={
    course_name:req.body.course_name,
    course_duration:req.body.course_duration,
    course_fees: req.body.course_fees
  }
  const course = await Course_List.create(data);
  res.render('courses', {course : course});
}
const getCourse = async(req,res)=>{
  let data= await Course_List.findAll({});
  res.render('courses' , {course : data});

}
const updateCourse=async(req,res)=>{
  let id=req.params.id;
  let data=req.body;
  console.log("Body is :: ",req.body);
  console.log("update course id :: "+id);
  await Course_List.update(data, { where: {id:id} });

  let data1= await Course_List.findAll({});
  res.render('courses' , {course : data1});

}

const deleteCourse=async(req,res)=>{
  let id=req.params.id;
  await Course_List.destroy({where: {id:id}});
  res.send('Course Deleted');
}

const renderAddCourse=async(req,res)=>{
  res.render('addCourse');
}

const renderUpdateCourse = async(req,res)=>{
  let id=req.params.id;
    const data = await Course_List.findOne( { where: {id:id} });
    res.render('updateCourse',{course:data});
}

module.exports={
  addCourse,
  getCourse,
  updateCourse,
  deleteCourse,
  renderAddCourse,
  renderUpdateCourse
}