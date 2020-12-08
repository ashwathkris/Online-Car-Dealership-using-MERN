const axios = require("axios");

export const book = (req) => {
  return axios
    .post("http://localhost:5000/api/users/book", {
      firstname: req.firstname,
      lastname: req.lastname,
      mail: req.mail,
      mobnum: req.mobnum,
      timeslot: req.timeslot,
      date: req.date,
      model: req.model,
    })
    .then(function (response) {
      return response;
    });
};
