const imagenesService = require('../services/imagenesService');

module.exports = {
    async getImagesByBreedId(req, res) {
        const { breed_id } = req.query;
        const images = await imagenesService.getImagesByBreedId(breed_id);
        res.json(images);
    }
};
