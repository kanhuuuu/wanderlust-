// 1-basic code setop
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const ExppressError = require("./utils/ExpressError.js");
const reviews = require("./models/reviews.js");
const listing = require("./routes/listings.js");
const review = require("./routes/review.js");
//4-data base connect
const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";
//Main function call
main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(MONGO_URL);
}
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

//3-api
app.get("/", (req, res) => {
  res.send("Hii, I am root!");
});

app.use("/listings", listing);
app.use("/listings/:id/reviews", review);

//err
app.all("*", (req, res, next) => {
  next(new ExppressError(404, "Page Not Found!"));
});
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "smething went wrong!" } = err;
  res.status(statusCode).render("error.ejs", { message });
  // res.status(statusCode).send(message);
});
app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
