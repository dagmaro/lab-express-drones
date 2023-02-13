const express = require("express");
const router = express.Router();
const DroneModel = require("../models/Drone.model");

// require the Drone model here

router.get("/drones", async (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  DroneModel.find()
    .then((response) => {
      //console.log(response);

      res.render("drones/list.hbs", {
        dronesList: response,
      });
    })
    .catch((err) => {
      next(err);
    });
});

router.get("/drones/create", (req, res, next) => {
  res.render("drones/create-form.hbs");
});

router.post("/drones/create", async (req, res, next) => {
  try {
    await DroneModel.create({
      name: req.body.name,
      propellers: req.body.propellers,
      maxSpeed: req.body.maxSpeed,
    });
    res.redirect("/drones");
  } catch (err) {
    next(err);
  }
});

router.get("/drones/:id/edit", async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  try {
    const dronesId = req.params.id;
    const dronesUpdate = await DroneModel.findById(dronesId);
    res.render("drones/update-form.hbs", {
      dronesUpdate: dronesUpdate,
    });
  } catch (error) {
    next(error);
  }
});

router.post("/drones/:id/edit", async (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here

  try {
    await DroneModel.findByIdAndUpdate(req.params.id, {
      name: req.body.name,
      propellers: req.body.propellers,
      maxSpeed: req.body.maxSpeed,
    })

    res.redirect("/drones")
  } 
  catch (error) {
    next(error)
  }
  
});

router.post("/drones/:id/delete", async (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  try {
    await DroneModel.findByIdAndDelete(req.params.id)
    res.redirect("/drones")
  } catch (error) {
    next(error)
  }

});

module.exports = router;
