const express = require("express")
const userController = require("../../controller/userController")

const userRouter = express.Router()
userRouter.get("/", userController.getAllUser)
userRouter.get("/create", userController.createUser)


module.exports = userRouter;
