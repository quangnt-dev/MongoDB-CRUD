const mongoose = require( 'mongoose' );

// todo: interface | table | collection
const CourseSchema = new mongoose.Schema( {
  name: String,
  author: String,
  tags: [ String ],
  date: { type: Date, default: Date.now },
  isPublished: Boolean,
  price: Number
} );

const Course = mongoose.model( 'Course', CourseSchema );
// ! Course -->  courses
module.exports = Course;

