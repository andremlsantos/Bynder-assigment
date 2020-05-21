const express = require("express");
const router = express.Router();

const UnsplashService = require("../services/UnsplashService");

router.get("/", UnsplashService.list_collections);
router.post("/", UnsplashService.create_collection);
router.post(
    "/:collection_id/add/:photo_id",
    UnsplashService.add_photo_collection
);

module.exports = router;
