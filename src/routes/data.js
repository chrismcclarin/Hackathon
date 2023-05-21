import Express from 'express';
import {get} from '../controllers/Data.js'
const DATA_ROUTER = Express.Router();

/**
 * Holds the route controllers for the account endpoint API.
 * 
 * @returns 
 */
const ROUTES = () => {

    DATA_ROUTER.get("/", get)
    return DATA_ROUTER
}

export { ROUTES };