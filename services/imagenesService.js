const axios = require('axios');
const { CAT_API_KEY } = process.env;

const api = axios.create({
    baseURL: 'https://api.thecatapi.com/v1',
    headers: { 'x-api-key': CAT_API_KEY },
});

module.exports = {
    async getImagesByBreedId(breed_id) {
        const response = await api.get('/images/search', {
            params: { breed_id }
        });
        return response.data;
    }
};
