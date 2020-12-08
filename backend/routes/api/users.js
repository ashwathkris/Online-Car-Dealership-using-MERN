const express = require("express");
const router = express.Router();
const keys = require("../../config/keys");
const User = require("../../models/User");
const cars = require("../../models/car");

///////////////
// GET Functions for all the cars
router.get("/cars", (req, res) => {
  cars
    .find({})
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.log("error: ", daerrorta);
    });
});

//////////////

router.post("/book", (req, res) => {
  const newUser = new User({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    mail: req.body.mail,
    mobnum: req.body.mobnum,
    model: req.body.model,
    date: req.body.date,
    timeslot: req.body.timeslot,
  });
  newUser
    .save()
    .then((user) => res.send(user))
    .catch((err) => console.log(err));
});

module.exports = router;
