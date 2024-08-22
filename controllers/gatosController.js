const gatosService = require('../services/gatosService');

module.exports = {
    async getBreeds(req, res) {
        const breeds = await gatosService.getBreeds();
        res.json(breeds);
    },

    async getBreedById(req, res) {
        const { breed_id } = req.params;
        const breed = await gatosService.getBreedById(breed_id);
        res.json(breed);
    },

    async searchBreeds(req, res) {
        const { q } = req.query;
        const breeds = await gatosService.searchBreeds(q);
        res.json(breeds);
    }
};
