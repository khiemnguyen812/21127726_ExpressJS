const express = require("express");
const app = express();
const port = 4000 || process.env.PORT;
const expressHbs = require("express-handlebars");

//Cau hinh tra ve thu muc web tinh
app.use(express.static(__dirname + "/html"));

//Cau hinh su dung view template
app.engine(
  "hbs",
  expressHbs.engine({
    layoutsDir: __dirname + "/views/layouts",
    partialsDir: __dirname + "/views/partials",
    extname: "hbs",
    defaultLayout: "layout",
  })
);
app.set("view engine", "hbs");

//app.get("/", (req, res) => res.sendFile(__dirname + "/html/index.htm"));
app.use("/task1", require("./routes/task1Route"));
app.use("/task2", require("./routes/task2Route"));
app.use("/task3", require("./routes/task3Route"));
app.use("/task4", require("./routes/task4Route"));

app.get("/", (req, res) => {
  res.render("index");
});


app.get("/admin", (req, res) => {
  res.render("index", {
    layout: "admin",
  });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
