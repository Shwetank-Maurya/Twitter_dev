const express = require('express');

const connect = require('./config/database');

const app = express();

const Tweet = require('./models/tweet');
const Comment = require('./models/comment');

const TweetService = require('./services/tweet-service');

const TweetRepository = require('./repository/tweet-repository');
const HashtagRepository = require('./repository/hashtag-repository');
const Hashtag = require('./models/hashtags');

app.listen(3000, async () => {
    console.log(`Server started at PORT:3000`);
    await connect();
    console.log('Mongo DB connected');
    
});


//for pagination in mongoose we use skip and limit 
//virtuals
//triggers