
const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId');

module.exports = {
    index: async (request, response) => {
        const ongs = await connection('ongs').select('*');
    
        return response.json(ongs);
    },
    create: async (request, response) => {
        const {name, email, whatsapp, city, uf} = request.body,
            id = generateUniqueId(4);
        
        
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        });
    
        return response.json({id});

    }
};