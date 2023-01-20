// var bodyParser = require("body-parser");

// var urlencodededParser = bodyParser.urlencoded({ extended: false });
const { render } = require('ejs');
const db =require('../models');

// var data = [
//   { cname: "java", cduration: 30, cfees: 6000 },
//   { cname: "python", cduration: 60, cfees: 12000 },
// ];
//main model for course list
const Course_List=db.course_list;
 
// module.exports = function (app) {
//   app.get("/courses", function (req, res) {
//     res.render("courses", { course: data });
//   });
//   app.post("/courses", function (req, res) {
//     // app.post("/courses",urlencodededParser,function(req,res){

//     data.push(req.body);
//     res.json(data);
//     // res.render('courses');
//   });
//   app.delete("/courses/:course", function (req, res) {
//     data = data.filter(function(courses) {
          
//             return courses.course.replace(/ /g, '-') !== req.params.course;
//           });
//           res.json(data);
//   });

//   app.get("/addCourse", function (req, res) {
//     res.render("addCourse");
//   });
// };
//

//Add Course

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
  // res.send(data);

}
const updateCourse=async(req,res)=>{
  let id=req.params.id;
  let data=req.body;
  console.log("Body is :: ",req.body);
  console.log("update course id :: "+id);
  await Course_List.update(data, { where: {id:id} });

  let data1= await Course_List.findAll({});
  res.render('courses' , {course : data1});

  // res.send(data);
  // res.render('courses', );
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