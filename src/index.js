import express from 'express';
import bodyParser from 'body-parser';

import {connect} from './config/database.js';
import service from './services/tweet-service.js';

import apiRoutes from './routes/index.js';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/api',apiRoutes);

app.listen(3000, async () => {
    console.log(`Server started at PORT:3000`);
    await connect();
    console.log('Mongo DB connected');
});


//for pagination in mongoose we use skip and limit 
//virtuals
//triggers