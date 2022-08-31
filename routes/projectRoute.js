const express = require("express");
const router = express.Router();
const Project = require("../models/projectModel"); 

router.route('/bingus').post((req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const newProject = new Project({
        title,
        description
    });
    newProject.save();
})

module.exports = router;