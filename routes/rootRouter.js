const rootRouter = require("express").Router()

const userRouter = require("./userRouter/userRoutes")

rootRouter.use("/user", userRouter)

module.exports = rootRouter