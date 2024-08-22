const express = require('express');
const gatosController = require('../controllers/gatosController');
const router = express.Router();

router.get('/breeds', gatosController.getBreeds);
router.get('/breeds/:breed_id', gatosController.getBreedById);
router.get('/breeds/search', gatosController.searchBreeds);

module.exports = router;
