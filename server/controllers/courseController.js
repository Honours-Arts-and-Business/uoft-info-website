const Course = require("../models/courseModel");
const mongoose = require("mongoose");

//get all courses
const getCourses = async (req, res) => {
  const courses = await Course.find({}).sort({ createdAt: -1 });

  res.status(200).json(courses);
};

//get single course
const getCourse = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such courses" });
  }

  const course = await Course.findById(id);

  if (!course) {
    return res.status(400).json({ error: "no such courses" });
  }

  res.status(200).json(course);
};

//create new course
const createCourse = async (req, res) => {
  const { title, code, desc } = req.body;

  //add doc to db
  try {
    const course = await Course.create({ title, code, desc });
    res.status(200).json(course);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
};

//delte a course
const deleteCourse = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such course" });
  }

  const course = await Course.findOneAndDelete({ _id: id });
  if (!course) {
    return res.status(400).json({ error: "no such course" });
  }

  res.status(200).json(course);
};

//update a course

const updateCourse = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "no such course" });
  }

  const course = await Course.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!course) {
    return res.status(400).json({ error: "no such course" });
  }

  res.status(200).json(course);
};

module.exports = {
  createCourse,
  getCourses,
  getCourse,
  deleteCourse,
  updateCourse,
};
