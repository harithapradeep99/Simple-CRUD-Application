const express = require('express');
const Post = require('../models/postsModel');

const router = express.Router();

//Save a post
router.post('/posts/save', (req, res) => {
    let newPost = new Post(req.body);

    newPost.save((err) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: "Post saved successfully"
        });
    });
});

//Get all posts
router.get('/posts', (req, res) => {
    Post.find().exec((err, posts) => {
        if (err) {
            return res.status(400).json({
                error: err
            });
        }
        return res.status(200).json({
            success: true,
            existingPosts: posts
        });
    });
});

//Get a specific post
router.get("/posts/:id", (req, res) => {
    let postId = req.params.id;

    Post.findById(postId, (err, post) => {
        if (err) {
            return res.status(400).json({ success: false, err });
        }

        return res.status(200).json({
            success: true,
            post
        });
    });
});


//Update a post
router.put('/posts/update/:id', (req, res) => {
    Post.findByIdAndUpdate(
        req.params.id,
        {
            $set: req.body
        },
        (err, post) => {
            if (err) {
                return res.status(400).json({ error: err });
            }

            return res.status(200).json({
                success: "Updated successfully"
            });
        }
    );
});

//Delete a post
router.delete('/posts/delete/:id', (req, res) => {
    Post.findByIdAndRemove(req.params.id).exec((err, deletedPost) => {
        if (err) return res.status(400).json({
            message: "Delete unsuccessful", err
        });

        return res.json({
            message: "Delete successful", deletedPost
        });
    });
});

module.exports = router;