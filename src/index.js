const express = require('express');

const connect = require('./config/database');

const app = express();

const Tweet = require('./models/tweet');
const Comment = require('./models/comment');

const TweetRepository = require('./repository/tweet-repository');

app.listen(3000, async () => {
    console.log(`Server started at PORT:3000`);
    await connect();
    console.log('Mongo DB connected');
    
    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.create({content:'Tweet with comment Schema'});
    const comment = await Comment.create({content:'new comment'});
    tweet.comments.push(comment);
    await tweet.save();
    console.log(tweet);
});
