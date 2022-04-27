const express = require('express')
const router = express.Router()
const port = process.env.PORT || 9000
const colors = require('colors')
const { PORT } =require("./config/config.js");


const connectDB = require('./config/config')
const { path } = require('express/lib/application')
require("dotenv/config");
const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs');
const swaggerDocument = YAML.load('D:/wbdrest/wbdrest/backend/swagger.yaml');

//cors
const cors = require("cors")

const morgan = require('morgan')
const multer = require('multer')
const fsr = require('file-stream-rotator')


//json encoded
const app =express()
app.use(express.json());
app.use(express.urlencoded({extended:false}));


//cors
var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));


//multer
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'C:/Users/DELL/OneDrive/Documents/FSD2_GROUP-31/FSD_GROUP31_Code/fsd_app/src/images/ProfileImages')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname+".jpg")
  }
})
var upload = multer({ storage: storage })

  app.post('/uploadfile', upload.single('myFile'), (req, res, next) => {
    const file = req.file
    console.log(file)
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }
    //  res.send(file)
    res.redirect("http://localhost:3000/");
  })
  //db connection
  const db = require('./models')
  db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });





//morgan
morgan.token("wbdaccess", "User trying to access the :url");
  let logsinfo = fsr.getStream({filename:"test.log", verbose: true});
  app.use(morgan('combined', {stream: logsinfo}))

//routes
app.use('/api/user', require('./routes/userRoutes'))
app.use('/api/products', require('./routes/sellProductsRoutes'))
app.use('/api/address', require('./routes/addressRoutes'))
app.use('/api/upload', require('./routes/Profilerouter'))
app.listen(port, () => console.log(`Server started at port ${port}`))
//swagger
app.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(swaggerDocument)
  );


module.exports=router