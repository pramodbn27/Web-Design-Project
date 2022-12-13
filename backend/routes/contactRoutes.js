const express = require("express");
const router = express.Router();
const {
    getContacts
} = require("../controller/contactControllers");

router.get("/", getContacts);

module.exports = router;