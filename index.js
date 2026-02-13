const express = require("express");
require('dotenv').config();
const rootRouter = require("./routes/rootRouter")
const connectDB = require("./config/db")


const app = express();

connectDB()

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "hbs");
app.use(express.static("public"));

const PORT = process.env.PORT || 4000;

app.use("/", rootRouter)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
