const User = require("../models/userModel");
const getAllUser = async (req, res) => {
  try {
    const users = await User.find()
    res.render("users/index", { users })
  } catch (error) {

  }
}

const createUserForm = async (req, res) => {
  res.render("users/create")
}

const createUser = async (req, res) => {
  const { name, email, age } = req.body
  try {
    const response = await User.create({ name, email, age })
    console.log("success")
    res.redirect("/user")
  } catch (error) {
    console.log(error)
  }
}

const editUserView = async (req, res) => {
  const id = req.params.id;
  const currentUser = await User.findById(id);

  if (!currentUser) {
    console.log("user not found");
    return res.redirect("/user");
  }

  res.render("users/edit", {
    currentUser
  });

};

const updateUser = async (req, res) => {
  const { name, email, age } = req.body
  console.log(`from update ${name}`)
  res.redirect("/user")
}

const deleteUser =async (req, res) => {
  const id = req.params.id
  const response = await User.findOneAndDelete(id)
  res.redirect("/user")
}

module.exports = {
  getAllUser,
  createUserForm,
  createUser,
  editUserView,
  updateUser,
  deleteUser,
}