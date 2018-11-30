const express= require('express'),
      router = express.Router()
      User = require('../models/user');
router.post('/createuser',(req,res,next)=>{
    const newUser = new User({
        email: req.body.email,
        name: req.body.name,
        dob: req.body.dob,
        app_name: req.body.app_name,
        app_type: req.body.app_type,
        api_key: key
    });
    newUser.save()
        .then(result=>{
            if(result){
                res.status(201).json({
                    message: 'Registration Successful'
                });
            }else{
                res.status(500).json({
                    message: 'Something Went Wrong'
                })
            }
        }).catch(err=>{
            res.status(500).json({
                message: 'Something Went Wrong',
                error: err
            })
        });
});
module.exports = router;