import Data from '../models/Data.js';


// INDEX ROUTE
export const get = async (req, res) => {
    try {
        // SEND ALL
        res.json(await Data.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
};