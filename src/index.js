import Express from 'express';
import Dotenv from 'dotenv';
import Mongoose from 'mongoose';
import cors from "cors";

import { ROUTES as TRANSLATE_ROUTER } from './routes/translate.js';
import { ROUTES as ACCOUNT_ROUTER } from './routes/account.js';
import { ROUTES as DATA_ROUTER } from './routes/data.js';
import { ROUTES as SPANISH_ROUTER } from './routes/spanish.js';

// Configure the environment variables.
Dotenv.config();

/**
 * Bind the express instance.
 */
const WEB_SERVER = Express();

/**
 * Destructure environmental variables (defaults if none present).
 */
const { PORT = 4000, APPLICATION_NAME = 'Nameless Project', DATABASE} = process.env;

/**
 * Binds the routers to the web server instance.
 */
const bindRoutes = () => {
    
    WEB_SERVER.use(cors());
    // WEB_SERVER.use('/translate', TRANSLATE_ROUTER());
    WEB_SERVER.use('/account', ACCOUNT_ROUTER());
    WEB_SERVER.use('/en', DATA_ROUTER());
    WEB_SERVER.use('/es', SPANISH_ROUTER());
}

/**
 * Construction method for binding middleware assets.
 */
const bindMiddleware = () => {

    // Sets the json parser middleware.
    WEB_SERVER.use(Express.json);

    console.log(`${APPLICATION_NAME} - successfully bound middleware...`)
}

const connectDB = async () => {

        // Deprecation suppression
        Mongoose.set('strictQuery', false);

        // Attempt to connect to the database
        Mongoose.connect(DATABASE);
    
        // On successful connection to the database
        Mongoose.connection.on('connected', () => {
            console.log(`${APPLICATION_NAME} - MongoDB successfully connected...`);

            // Setup port listener upon successful connection.
            listen();
        });
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
    // Connect to database
    connectDB();
}

// Invoke the application start
build();