import Express from 'express';

import { ROUTES as TRANSLATE_ROUTER } from './routes/translate.js';

/**
 * Bind the express instance.
 */
const WEB_SERVER = Express();

/**
 * Destructure environmental variables (defaults if none present).
 */
const { PORT = 3000, APPLICATION_NAME = 'Nameless Project' } = process.env;

/**
 * Binds the routers to the web server instance.
 */
const bindRoutes = () => {

    WEB_SERVER.use('/translate', TRANSLATE_ROUTER());
}

/**
 * Construction method for binding middleware assets.
 */
const bindMiddleware = () => {

    // Sets the json parser middleware.
    WEB_SERVER.use(Express.json);

    console.log(`${APPLICATION_NAME} - successfully bound middleware...`)
}

/**
 * Setup the server listener for {PORT}.
 */
const listen = async () => {

    WEB_SERVER.listen(PORT, () => console.log(`${APPLICATION_NAME} - now listening on port ${PORT}!`));
}

/**
 * Build the project requirements and initialize the application.
 */
const build = async () =>  {
    // Bind routes
    bindRoutes();
    // Bind middleware
    bindMiddleware();
    // Setup port listener
    listen();
}

// Invoke the application start
build();