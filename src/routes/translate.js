import Express from 'express';

const CREATE_ROUTER = Express.Router();

const ROUTES = () => {

    CREATE_ROUTER.get('/');

    return CREATE_ROUTER;
}

export { ROUTES };