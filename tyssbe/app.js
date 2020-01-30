const createError = require('http-errors');
const cookieParser = require('cookie-parser');
const express = require ('express');
const path = require('path');

const app = express();
const logger = require('morgan');

const cors = require('cors');


const indexRouter = require('./Routes/index');
const imageupload = require('./Routes/imageupload.route');
const showimage = require('./Routes/showimage.route')
const image = require('./Routes/client');



const clientRoutes=require('./Routes/client');
const billableEngineersDetails = require('./Routes/BillableEngineers');
const packageBillableRoutes = require('./Routes/packageBillable');


const bodyParser = require ('body-parser');

const mongoose = require ('mongoose');
let mongodbURI = "mongodb://localhost:27017/myOwnProject";


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/static', express.static('public'))

app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(cors());

app.use(indexRouter);

app.use(imageupload);
app.use(showimage);
app.use(image);

app.use(clientRoutes);
app.use(billableEngineersDetails);
app.use(packageBillableRoutes);


app.use(function(req, res, next) {
    next(createError(404));
});



// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});




mongoose.connect(mongodbURI, { useNewUrlParser: true }).then(res => {    //then and catch are promises
   
    console.log("mongodb connected successfully");
    app.listen(4000);
    console.log("app is listening to port number 4000");
        
}).catch(err => {
console.log(err);
});

// module.exports = app;
