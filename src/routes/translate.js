import Express from 'express';

import { get } from '../controllers/translated.js';

const TRANSLATE_ROUTER = Express.Router();

/**
 * Holds the route controllers for the translate endpoint API.
 * 
 * @returns 
 */
const ROUTES = () => {

    TRANSLATE_ROUTER.get('/', get);

    return TRANSLATE_ROUTER;
}

export { ROUTES };