const router = require('express').Router();
const User = require('../models/userModel');
const multer = require('multer');
const encrypt = require('../functions/Encryption');

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, '../client/src/uploads');
    }, 
    filename: (req, file, callback) => {
        callback(null,  req.body.email + '_' + "profile_" + file.originalname);
    }
})
const upload = multer({storage: storage});
//route to add a user
router.post('/addUser', upload.single('profileImg'), async(req, res) => {
    const username = req.body.username; 
    const email = req.body.email; 
    const password = encrypt(req.body.password); 
    const newUser = new User({
        username: username, 
        email: email, 
        password: password, 
        profileImg: req.file.filename 
    });
    //check if the user exists or not 
    const userExists = await User.exists({email: email}); 
    if(userExists)
    {
        res.status(400).json('Error'); //it means the  user exists 
        return; 
    }
    else 
    {
        newUser.save()
        .then((user) => {
            res.json(user); 
        })
        .catch((err) => {
            res.status(400).json('Error');
        })
    }
})
//route to find a user with password and email alone 
router.post('/loginUser', async(req, res) => {
    const email = req.body.email; 
    const password = encrypt(req.body.password); 
    User.find({email: email, password: password})
    .then((user) => {
        res.json(user);
    })
    .catch((err) => {
        res.status(400).json('Error');
    })
})
module.exports = router;