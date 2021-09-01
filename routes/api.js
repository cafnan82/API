const express = require('express');
const User = require('../models/user');
const Like = require('../models/like');
const Comment = require('../models/comment');
const router = express.Router();

router.get('/',async function(req,res){
    let users = await User.find();
        res.render("home", {
            users: users,
        })
    });

    router.post('/target',async function(req,res){
        let users = await User.find();
            res.render("target", {
                
            })
        });   

router.get('/user/list',function(req,res){
    User.find({},async (err,users)=>{
        if (err) throw err;
        res.send({users});
    });
});

router.get('/user/likes/:userId',async function(req,res){
    let uid = req.params.userId;
    let user = await User.findOne({userid: uid});
    if(user){
        Like.find({userid: uid},{'_id':0, 'likes':1},async (err,l)=>{
            if(err) throw err;
            res.json({msg: "success", data: l});
        });
    } else{
        res.json({msg: "error", data: "invalid user"});
    }
});

router.get('/user/comments/:userId',async function(req,res){
    let uid = req.params.userId;
    let user = await User.findOne({userid: uid});
    if(user){
        Comment.find({userid: uid},{'_id':0, 'comments':1}, async (err,c)=>{
            if(err) throw err;
            res.json({msg: "success", data: c});
        });
    } else{
        res.json({msg: "error", data: "invalid user"});
    }
});


router.post('/user/upload',async function(req,res){
    let uid = req.query.userid;
    let name = req.query.name;
    newUser = new User({
        userid: uid,
        name: name,
    });
    await newUser.save();
    res.send({"status": "user added successfully"});
});

router.post('/user/like/upload',async function(req,res){
    let uid = req.query.userid;
    let likes = req.query.likes;
    let user = await User.findOne({userid: uid});
    if(user){
    newLikes = new Like({
        userid: uid,
        likes: likes,
    });
    await newLikes.save();
    res.send({"status": "likes added successfully"});
} else{
    res.send({"error": "invalid user id"});
}
});

router.post('/user/comment/upload',async function(req,res){
    let uid = req.query.userid;
    let comment = req.query.comments;
    let user = await User.findOne({userid: uid});
    if(user){
    newComment = await new Comment({
        userid: uid,
        comments: comment,
    });
    await newComment.save();
    res.send({"status": "comments added successfully"});
} else{
    res.send({"error": "invalid user id"});
}
});



module.exports = router;