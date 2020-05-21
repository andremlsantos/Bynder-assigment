const express = require("express");
const router = express.Router();

const UnsplashService = require("../services/UnsplashService");

router.get("/", UnsplashService.list_photos);

module.exports = router;
