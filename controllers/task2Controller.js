const controller = {};

let { emotions } = require("../data");
controller.show = (req, res) => {
  let salary = req.query.salary ? parseFloat(req.query.salary) : 0;
  let jar55 = (salary * 55) / 100;
  let jar10 = (salary * 10) / 100;
  let jar5 = (salary * 5) / 100;
  res.render("task2",{jar10,jar55,jar5});
};
module.exports = controller;
