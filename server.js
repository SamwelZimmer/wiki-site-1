const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
app.use(cors());
// app.use(cors({origin: true, credentials: true}));
app.use(express.json());

//this will all have to be redone before public upload

//connect to mongoose
mongoose.connect("mongodb+srv://admin-samwel:test123@cluster0.pyskny8.mongodb.net/wikiTestDB")
// mongoose.connect("mongodb+srv://admin-samwel:test123@cluster0.pyskny8.mongodb.net/?retryWrites=true&w=majority")


//require route
app.use("/", require("./routes/projectRoute"))

app.listen(3001, function() {
    console.log("express server is running on port 3001")
})
