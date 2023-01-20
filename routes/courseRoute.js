const courseController = require('../controllers/courseController.js');
const router=require('express').Router();

router.post('/addCourse',courseController.addCourse);
router.get('/getCourse',courseController.getCourse);

router.put('/:id',courseController.updateCourse);

router.delete('/:id',courseController.deleteCourse);
router.get('/addCourse',courseController.renderAddCourse);


router.get('/update/:id',courseController.renderUpdateCourse);



module.exports = router;
 