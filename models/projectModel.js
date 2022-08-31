const mongoose = require("mongoose");

const projectSchema = {
    title: String,
    description: String
}

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;