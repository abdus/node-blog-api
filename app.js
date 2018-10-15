global.rootDirName = __dirname;
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const apiRouter = require('./routes/blogRoute');
const usersRouter = require('./routes/users');

const app = express();
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/blog-db', {useNewUrlParser: true});

app.use(logger('dev'));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: false, limit: '50mb' }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/blog', apiRouter);
app.use('/api/users', usersRouter);

module.exports = app;