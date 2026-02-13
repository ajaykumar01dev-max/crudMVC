const express = require("express")
const userController = require("../../controller/userController")

const userRouter = express.Router()
userRouter.get("/", userController.getAllUser);
userRouter.get("/create", userController.createUserForm);
userRouter.post("/create", userController.createUser);
userRouter.post("/edit/:id", userController.updateUser);
userRouter.get("/edit/:id", userController.editUserView);
userRouter.get("/delete/:id", userController.deleteUser)



module.exports = userRouter;
