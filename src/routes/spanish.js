import Express from 'express';
import { get } from '../controllers/spanish.js';
// import {get as Dataget} from '../controllers/Data.js'
const SPANISH_ROUTER = Express.Router();

/**
 * Holds the route controllers for the account endpoint API.
 * 
 * @returns 
 */
const ROUTES = () => {
    SPANISH_ROUTER.get("/", get)
    return SPANISH_ROUTER
}

export { ROUTES };