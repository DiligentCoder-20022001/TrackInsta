const router = require('express').Router();
const Note = require('../models/notes');

//displaying all the notes 
router.route('/displayNotes').get((req, res) => {
    //getting information from the site 
    res.json('Notes');
})

//adding a note 
router.route('/createNote').post((req, res) => {
    const title = req.body.title; 
    const content = req.body.content; 
    const category = req.body.category; 
    const newNote = new Note({
        title: title, 
        content: content, 
        category: category
    });
    newNote.save()
    .then(() => res.json('New note saved successfully'))
    .catch((err) => res.status(400).json('Error in insertion'))

})
module.exports = router;