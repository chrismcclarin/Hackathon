import { translate } from "./translate.js";

export const get = async (request, response) => {

    // First check if API param requirements are met.
    if (!request.query.input || !request.query.language) {

        return response.json( { error: 'API call requires input and language parameters!' } );
    }

    // Call external API for translation attempt.
    const translated = await translate(request.query.input, request.query.language);

    return response.json(translated)
}