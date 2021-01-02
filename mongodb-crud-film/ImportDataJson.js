const mongoose = require( 'mongoose' );

// ?: Collection || Table
const Course = require( './models/courses' );
const Data = require( './data.json' );

// ?: mongoimport --db courses --collection courses --file data.json --jsonArray

console.log( Data );

mongoose.connect(
  `mongodb://localhost:27017/courses`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
  .then( () => console.log( 'connected to mongodb !' ) )
  .catch( () => console.log( 'error: ', err ) );

// todo: Document - Row - instance of Collection = Schema + Model
// c1
// for ( let course of Data ) {
//   let newCourse = new Course( course );
//   newCourse.save()
//     .then( course => console.log( course ) )
//     .catch( err => console.log( err ) );
// }

// todo: c2: Promise All
const createCourse = async ( course ) => await Course.create( course );

const createCourseArray = Data.map( course => createCourse( course ) );

Promise.all( createCourseArray )
  .then( course => console.log( course ) )
  .catch( err => console.log( err ) );
