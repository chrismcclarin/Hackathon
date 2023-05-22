import { translate } from "./translate.js";
import Data from '../models/Data.js';

export const get = async (request, response) => {
    let info = await Data.find({}, {Data:1})
    const translated = await Promise.all(info.map(async (words) => translate(words.Data, request.baseUrl.slice(1))))

    function mapping() {
        for (let i = 0; i<info.length; i++) {
            {
                info[i].Data = translated[i]
            }
        }
    }
    mapping()

    return response.json(info)
}