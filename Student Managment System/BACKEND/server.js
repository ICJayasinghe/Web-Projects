const app = require("express") ();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const port = process.env.PORT || 6000;

app.use(cors());
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect(process.env.DATABASE).then(() => {
    console.log("Connected To Database");
})

const studentRouter = require("./routes/students.js");

app.use("/student",studentRouter);

app.listen(port, () => {
    console.log("Studen Management System API Started On Port " + port);
})
