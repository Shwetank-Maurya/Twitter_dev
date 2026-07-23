import express from 'express';

import {connect} from './config/database.js';
import service from './services/tweet-service.js';

const app = express();

app.listen(3000, async () => {
    console.log(`Server started at PORT:3000`);
    await connect();
    console.log('Mongo DB connected');
    
    let ser = new service();
    await ser.create({content:'Donewith #refactor'})
});


//for pagination in mongoose we use skip and limit 
//virtuals
//triggers