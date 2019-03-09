const express = require('express');
const port = process.env.PORT || 5000;
const authRouter = require('./server/routes/auth');
const apiRouter = require('./server/routes/api');
const passportSteup = require('./server/services/passport');
const { mongoose } = require('./server/services/db');
const passport = require('passport');
var session = require('express-session');
const keys = require('./server/config/keys');
const bodyParser = require('body-parser');

const app = express();
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use(express.static('public'));
var SessionMiddleware = session({
    secret: keys.session_secret,
    resave: false,
    saveUninitialized: true
});
app.use(SessionMiddleware);
app.use(passport.initialize());
app.use(passport.session());
app.use('/api', apiRouter);
app.use('/auth', authRouter);
if (process.env.NODE_ENV === "production"){
    // express will serve production assets
    app.use(express.static('client/build'));
    // if it doesn't recognize the route 
    const path = require('path');
    app.get("*",(req,res)=>{
        res.sendFile(path.resolve(__dirname,'client','build','index.html'));
    });
}

app.listen(port, () => console.log(` app on port ${port}!`));
module.exports={app};