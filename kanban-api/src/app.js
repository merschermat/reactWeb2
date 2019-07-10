const express = require('express')
const app = express();
const path = require('path')
var cookieParser = require('cookie-parser');
const data = require('./dao/connection');
var cors = require('cors')

data.connectionOpen();

app.use(cors({
    origin: "http://localhost:3000",
    optionsSuccessStatus: 200,
    credentials:true
}))
app.options('*', cors())
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", 'http://localhost:3000');
    res.header("Access-Control-Expose-Headers", "Access-Control-Allow-Origin")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", "true")
    next();
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.use(require('./controller/routes/User'));
app.use(function (req, res, next) {
    if (!req.cookies.login) {
        res.status(401).send('log in to access this page')
    } else
        next();
})
app.use(require('./controller/routes/List'));
app.use(require('./controller/routes/Task'));
app.use(require('./controller/routes/Home'));
app.use(require('./controller/routes/Error'));


app.listen(process.env.PORT || '4000', () => console.log(`running!`))