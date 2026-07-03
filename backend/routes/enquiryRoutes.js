const express = require("express");
const router = express.Router();

const { sendEnquiry } = require("../controllers/enqueryController")

router.post("/", sendEnquiry);

module.exports = router;