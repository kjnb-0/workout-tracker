const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;