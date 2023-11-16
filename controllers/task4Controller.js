const controller = {};

let {zodiacs}=require("../data")
controller.show = (req, res) => {
  res.render("task4",zodiacs);
};

controller.showDetails=(req,res) =>{
  let zodiac=zodiacs.find((i)=>{return i.name==req.params.name});
  res.render("task4-details",{zodiac});
};
module.exports = controller;
