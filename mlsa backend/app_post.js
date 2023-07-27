const express = require("express");
const mongoose = require("mongoose");
require("./schemas/userDetails.jsx"); // it contains the model and schema for the way data will be stored
const app = express();
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const JWT_SECRET = "isbibvbsj woenwh082h34jwq@#$%^kdjfnvjvnejrvne";

app.use(cors());
app.use(express.json());

app.listen(5000, () => {
  console.log("server started");
});

// -----------------------------------------------------------------------------------------------------------------

// CONNECTING TO SERVER
const mongourl =
  "mongodb+srv://prish:he@cluster0.er5ugaow.mongodb.net/?retryWrites=true&w=majority";
mongoose
  .connect(mongourl, { useNewUrlParser: true })
  .then(() => {
    console.log("connected to db");
  })
  .catch((e) => console.log(e));

// Middleware for verifying token

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res
      .status(401)
      .send({ status: "error", message: "Unauthorized access" });
  }
  const token = authHeader.split(" ")[1];
  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
    // console.log("authorized access");
  } catch (err) {
    return res.status(401).send({ status: "error", message: "Invalid token" });
  }
};

// -----------------------------------------------------------------------------------------------------------------

// HERE WE ARE CREATING USER BY USING DATA HE ENTERED IN REGISTERATION PAGE
const user = mongoose.model("Registered Users"); // model declared in userDetails.
app.post("/register", async (req, res) => {
  const user_name = req.body.user_name;
  const pass_word = req.body.pass_word;
  const FirstName = req.body.First_name;
  const LastName = req.body.last_name;
  const contact = req.body.Contact;
  const age = req.body.age;
  const email = req.body.Email;

  // added backend validation to check that none of the field is empty
  if (
    !user_name ||
    !pass_word ||
    !FirstName ||
    !LastName ||
    !contact ||
    !age ||
    !email
  ) {
    res.send({ status: "error", message: "All fields are required" });
    return;
  }
  const encryptedpwd = await bcrypt.hash(pass_word, 8);
  const existingUser = await user.findOne({ user_name });

  if (existingUser) {
    res.send({ status: "error", message: "Username already exists" });
    return;
  }
  try {
    await user.create({
      user_name,
      pass_word: encryptedpwd,
      FirstName,
      LastName,
      age,
      contact,
      email,
    });
    res.send({ status: "ok" });
  } catch (error) {
    res.send({ status: "error", message: "Something went wrong" });
  }
});

// -----------------------------------------------------------------------------------------------------------------

// FOR HANDLING POST REQUESTS OF LOGIN TRIAL

app.post("/loginuser", async (req, res) => {
  const { user_name, pass_word } = req.body;
  const ifany = await user.findOne({ user_name }); // finds if the user exists with given username
  if (!ifany) {
    // checks if the user is registered
    res.send({ status: "error", message: "Username not found" });
    return;
  }
  if (await bcrypt.compare(pass_word, ifany.pass_word)) {
    const token = jwt.sign({ user_name }, JWT_SECRET);
    if (res.status(201)) {
      return res.json({ status: "ok", data: token });
    } else {
      return res.json({ error: "error" });
    }
  }
  res.send({ status: "error", error: "Invalid UserName or Password" });
  return;
});
