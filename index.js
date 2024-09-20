const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/productModel.js");
const app = express();
const productRoute = require("./routes/productRoute.js");

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

mongoose
  .connect(
    `mongodb+srv://${process.env.USER_DB}:${process.env.PASS}@backenddbtest.bilg6.mongodb.net/${process.env.COLLECTION}?retryWrites=true&w=majority&appName=BackendDbTest`
  )
  .then(() => {
    console.log("Connected to database!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log(process.env.USER_DB);
    console.log("Connection failed!");
  });

app.get("/", (req, res) => {
  res.send("Hello from Node API");
});
