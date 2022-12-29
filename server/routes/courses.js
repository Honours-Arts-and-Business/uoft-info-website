const {
  createCourse,
  getCourses,
  getCourse,
  deleteCourse,
  updateCourse,
} = require("../controllers/courseController");
const express = require("express");
const router = express.Router();

//get all courses
router.get("/", getCourses);

//get a specific course
router.get("/:id", getCourse);

//create a course
router.post("/", createCourse);

//delete a course
router.delete("/:id", deleteCourse);

//update a course
router.patch("/:id", updateCourse);

module.exports = router;
