const path =require('path'),
    express=require('express'),
    mongoose=require('mongoose'),
    bodyParser=require('body-parser');
const app = express();
const authrout = require('./routes/auth');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, OPTIONS"
    );
    next();
  });
try {
    mongoose.connect('mongodb://saikat:rbkvasqw12@ds151513.mlab.com:51513/news-api');
} catch (error) {
    console.log('Cannot Connect to Database'+error);
}
app.use('/api/auth/',authrout);
module.exports = app
export default app;
