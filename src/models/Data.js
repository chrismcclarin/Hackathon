import Mongoose from "mongoose";

/**
 * Reference instance to the mongoose schema object.
 */
const Schema = Mongoose.Schema;

const Data_SCHEMA = new Schema({
    Data:String,
}, { timestamps: true });

export default Mongoose.model('Data', Data_SCHEMA);