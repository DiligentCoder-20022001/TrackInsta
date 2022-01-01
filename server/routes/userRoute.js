const router = require('express').Router();
const User = require('../models/user'); 
const encrypt = require('../functions/RSA');
const encypt = require('../functions/RSA');
router.route('/addUser').post(async(req, res) => {
    const pic = req.body.pic;
    const username = req.body.username; 
    const email = req.body.email; 
    const password = req.body.password; 
    //check for weak password over here
    //encrypt the password
    const enPass = encypt(password);
    const newUser = new User({
        email: email, 
        password: enPass, 
        username: username, 
        pic: pic
    }); 
    
    const userExists = await User.exists({email: email});
    if(userExists)
    {
        res.status(400).json('User exists');
        return;
    }
    else 
    {
        //save the user 
        newUser.save()
        .then(() => {
            res.json('User saved');
        })
        .catch((err) => {
            res.status(400).json(err);
        })
    }
})
//display a user based on ID and password 
router.route('/validateUser').post((req, res) => {
    const password = encrypt(req.body.password); 
    console.log(password);
    const email = req.body.email; 
    User.find({email: email, password: password})
    .then((user) => {
        res.json(user);
    })
    .catch((err) => {
        res.status(400).json(err);
    })
})
//display all  the users
router.route('/displayUsers').get((req, res) => {
    User.find()
    .then((users) => {
        res.json(users);
    })
    .catch((err) => {
        res.status(400).json(err);
    })

})
module.exports = router;