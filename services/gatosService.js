const axios = require('axios');
const { CAT_API_KEY } = process.env;

const api = axios.create({
    baseURL: 'https://api.thecatapi.com/v1',
    headers: { 'x-api-key': CAT_API_KEY },
});

module.exports = {
    async getBreeds() {
        const response = await api.get('/breeds');
        return response.data;
    },

    async getBreedById(breed_id) {
        const response = await api.get(`/breeds/${breed_id}`);
        return response.data;
    },

    async searchBreeds(query) {
        const response = await api.get(`/breeds/search`, { params: { q: query } });
        return response.data;
    }
};
