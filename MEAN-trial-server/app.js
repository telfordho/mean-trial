import express from 'express';
import './models/db'
import './models/users'
import './config/passport'

import path from 'path';
import logger from 'morgan';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import cors from 'cors';
import passport from 'passport';
import routesApi from './routes/index';

var app = express()
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(passport.initialize());
app.use('/api', routesApi);

app.listen(3000, () => console.log('Example app listening on port 3000!'))

