const User = require("../models/userModel")

exports.getAllUser = (req, res) => {
    res.render("users/index")
}

exports.createUser = (req, res) => {
    res.render("users/create")
}