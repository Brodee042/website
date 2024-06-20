// Controllers for the renovation Collection

import 'dotenv/config';
import express from 'express';
import * as renovations from './construction-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.

        /* req.body.details */
// CREATE controller ******************************************
app.post ('/renovations', (req,res) => { 
    renovations.createRenovation(
        req.body.timeTaken, 
        req.body.givenDate, 
        req.body.constructionType,

        )
        .then(renovation => {
            console.log(`"The renovation that occured on ${renovation.givenDate}" was added to the database.`);
            res.status(201).json(renovation);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Error: There is an issue with the data submitted.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/renovations', (req, res) => {
    renovations.retrieveRenovations()
        .then(renovations => { 
            if (renovations !== null) {
                console.log(`All renovations were retrieved from the database.`);
                res.json(renovations);
            } else {
                res.status(404).json({ Error: 'Error: could not find the database!' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Error: retrieve failed' });
        });
});


// RETRIEVE by ID controller
app.get('/renovations/:_id', (req, res) => {
    renovations.retrieveRenovationByID(req.params._id)
    .then(renovation => { 
        if (renovation !== null) {
            console.log(`"${renovation.title}" was retrieved, based on its ID.`);
            res.json(renovation);
        } else {
            res.status(404).json({ Error: 'Error: The given ID does not exist in the database!' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Error: retrieve by ID failed' });
    });

});

        /* req.body.details */
// UPDATE controller ************************************
app.put('/renovations/:_id', (req, res) => {
    renovations.updateRenovation(
        req.params._id, 
        req.body.timeTaken, 
        req.body.givenDate, 
        req.body.constructionType,

    )
    .then(renovation => {
        console.log(`"The renovation that happened on ${renovation.givenDate}" was updated.`);
        res.json(renovation);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Error: there was no associated ID to update' });
    });
});


// DELETE Controller ******************************
app.delete('/renovations/:_id', (req, res) => {
    renovations.deleteRenovationById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} renovation in the database was deleted.`);
                res.status(200).send({ Success: 'The renovation associated with that ID has been deleted' });
            } else {
                res.status(404).json({ Error: 'Error: The given ID does not exist in the database!' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Error: There has been an issue when trying to delete via ID' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});