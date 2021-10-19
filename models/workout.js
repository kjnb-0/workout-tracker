const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  exercises: [
    {
      type: {
        type: String,
        required: "Enter type of exercise",
      },
      name: {
        type: String,
        required: "Enter exercise name",
      },
      duration: {
        type: Number,
        required: "Enter duration in minutes",
      },
      distance: {
        type: Number,
      },
      weight: {
        type: Number,
      },
      reps: {
        type: Number,
      },
      sets: {
        type: Number,
      },
    },
  ],
  day: {
    type: Date,
    default: Date.now,
  },
});

const Workout = mongoose.model("workout", workoutSchema);

module.exports = Workout;
