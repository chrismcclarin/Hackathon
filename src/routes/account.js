import Express from 'express';

import { login, signup, logout } from '../controllers/account-api.js';

const ACCOUNT_ROUTER = Express.Router();

/**
 * Holds the route controllers for the account endpoint API.
 * 
 * @returns 
 */
const ROUTES = () => {

    ACCOUNT_ROUTER.post('/signup', signup);

    return ACCOUNT_ROUTER;
}

export { ROUTES };