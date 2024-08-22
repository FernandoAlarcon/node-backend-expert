const express = require('express');
const imagenesController = require('../controllers/imagenesController');
const router = express.Router();

router.get('/imagesbybreedid', imagenesController.getImagesByBreedId);

module.exports = router;
