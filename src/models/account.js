import Mongoose from "mongoose";

/**
 * Reference instance to the mongoose schema object.
 */
const Schema = Mongoose.Schema;

/**
 * Schema of the data model for mongo.
 */
const ACCOUNT_SCHEMA = new Schema({

    credentials: {
        username: {
            type: String,
            required: true
        },
    
        password: {
            type: String,
            required: true
        }
    }
}, { timestamps: true });

export default Mongoose.model('account', ACCOUNT_SCHEMA);