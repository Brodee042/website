// Models for the renovation JSON

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Internal Server Error 500.' });
    } else  {
        console.log('Success! you are connected to the database.');
    }
});

// SCHEMA: Define the collection's schema.
const renovationSchema = mongoose.Schema({
	timeTaken:          { type: Number, required: true },
	givenDate:          { type: Date, required: true, default: Date.now},
	constructionType:   { type: String, required: true }
});
    /* details:            { type: String, required: false }*/
// Compile the model from the schema 
// by defining the collection name "renovations".
const renovations = mongoose.model('Renovations', renovationSchema);


// CREATE model *****************************************
const createRenovation = async (timeTaken, givenDate, constructionType) => {
    const renovation = new renovations({ 
        timeTaken: timeTaken, 
        givenDate: givenDate, 
        constructionType:  constructionType
    });
    return renovation.save();
}
        /* details: details */


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveRenovations = async () => {
    const query = renovations.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveRenovationByID = async (_id) => {
    const query = renovations.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteRenovationById = async (_id) => {
    const result = await renovations.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateRenovation = async (_id, timeTaken, givenDate, constructionType) => {
    const result = await renovations.replaceOne({_id: _id }, {
        timeTaken: timeTaken, 
        givenDate: givenDate, 
        constructionType:  constructionType
    });
    return { 
        _id: _id, 
        timeTaken: timeTaken, 
        givenDate: givenDate, 
        constructionType:  constructionType
    }
}

        /* details: details */
// EXPORT the variables for use in the controller file.
export { createRenovation, retrieveRenovations, retrieveRenovationByID, updateRenovation, deleteRenovationById }