import Axios from 'axios';
import Dotenv from 'dotenv';

Dotenv.config();

const { TRANSLATE_API_KEY } = process.env;

/**
 * Header options for axios request.
 */
const TRANSLATE_OPTIONS = {
    method: 'POST',
    url: 'https://rapid-translate-multi-traduction.p.rapidapi.com/t',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': TRANSLATE_API_KEY,
      'X-RapidAPI-Host': 'rapid-translate-multi-traduction.p.rapidapi.com'
    },
    data: null
}

/**
 * Controller method for handling translation mechanics.
 * 
 * @param {*} input Target text to translate
 * @param {*} language Language abbreviation
 * 
 * @returns Translated input
 */
export const translate = async (input, language) => {

    Object.assign(TRANSLATE_OPTIONS, { data: { from: 'en', to: language, q: input }});

    const response = await Axios.request(TRANSLATE_OPTIONS);

    console.log(`Original Input - ${input} [English]`);
    console.log(`Translated Input - ${response.data[0]} [Arabic]`);

    return response.data[0];
}