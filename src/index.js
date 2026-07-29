import express from 'express';
import bodyParser from 'body-parser';

import {connect} from './config/database.js';
import service from './services/tweet-service.js';

import apiRoutes from './routes/index.js';

import {UserRespository} from './repository/index.js'
import LikeService from './services/like-service.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api',apiRoutes);

app.listen(3000, async () => {
    console.log(`Server started at PORT:3000`);
    await connect();
    console.log('Mongo DB connected');

    this.userRepo =new UserRespository();
    const user = await this.userRepo.create({
        email:"rakesh@admin.com",
        password:"123455678",
        name:"sanket"
    });

    // const likeservice = new LikeService();
    // likeservice.toggleLike(); 
});


//for pagination in mongoose we use skip and limit 
//virtuals
//triggers