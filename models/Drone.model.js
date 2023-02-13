// Iteration #1
const mongoose = require("mongoose");

const droneSchema = new mongoose.Schema({
    name: String,
    propellers: Number,
    maxSpeed: Number
})

const DroneModel = mongoose.model("Drone", droneSchema);

module.exports = DroneModel;





