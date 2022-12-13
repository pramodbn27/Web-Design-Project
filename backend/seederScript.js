require("dotenv").config();

const productData = require("./data/products");
const contactData = require("./data/contacts");
const connectDB = require("./config/db");
const Product = require("./models/Product");
const Contact = require("./models/Contact");
const multer = require("multer");
const upload = multer({dest:"uploads/"})

const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

connectDB();

// middlewares
app.use(express.json());
app.use(cors());


//importing Product data and Contact data from Mongo DB

const importData = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(productData);
    await Contact.deleteMany({});
    await Contact.insertMany(contactData);
    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();
