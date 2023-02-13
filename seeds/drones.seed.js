// Iteration #1
require("../db")
const DroneModel = require("../models/Drone.model")
const drones = require("./drones.seed.json")

async function inserData() {
    try {
        await DroneModel.insertMany(drones)
        console.log("drones insertados")
    } catch (err) {
      console.log(err)
    }
}
inserData()

