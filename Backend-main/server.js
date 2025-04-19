const express = require("express")
const dotenv = require('dotenv')
const helmet = require('helmet')
const rateLimit = require("express-rate-limit");


const swaggerUi = require('swagger-ui-express')
const fs = require('fs')
const yaml = require('yaml')
const file = fs.readFileSync('./swagger.yaml', 'utf8')
const cors = require('cors')
const swaggerDocument = yaml.parse(file)
const MarketController = require('./Controller/MarketController');
const ReportController = require('./Controller/ReportController');
const StallController = require('./Controller/StallController');
const path = require("path");
const multer  = require('multer');

const storage_report = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './Public/uploads-report');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});


const upload_report  = multer({ 
  storage: storage_report,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: function (req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error('Only .jpg, .jpeg and .png files are allowed'));
    }
    cb(null, true);
  }
}); 

const storage_slip = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './Public/uploads-slip');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});

const upload_slip = multer({ 
  storage: storage_slip,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: function (req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error('Only .jpg, .jpeg and .png files are allowed'));
    }
    cb(null, true);
  }
}); 

dotenv.config({ path: './config/.env' });
const publicDirectory = path.join(__dirname, "Public");
const { MY_PORT, NODE_ENV,API_KEY} = process.env;

var app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, 
  max: 1000, 
});

function authenticateApiKey(req, res, next) {
  const apiKey = req.headers['api-key'];
  if (!apiKey || apiKey !== API_KEY) {
      return res.status(401).json({ message: 'Invalid API key' });
  }
  next();
}

app.use(limiter);
app.use(helmet())
app.disable('x-powered-by')

app.use(cors())
if(NODE_ENV === 'development'){
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument))
}


app.use(express.static(publicDirectory));


app.use(express.json())

app.get("/api/images", (req, res) => {
  const reportDirectory = path.join(publicDirectory, "uploads-report");
  fs.readdir(reportDirectory, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return res.status(500).json({ error: "Error reading directory" });
    }
    const imageUrls = files.map(file => `${req.protocol}://${req.get("host")}/uploads-report/${file}`);
    res.json(imageUrls);
  });
});

app.get("/api/images-slip", (req, res) => {
  const reportDirectory = path.join(publicDirectory, "uploads-slip");
  fs.readdir(reportDirectory, (err, files) => {
    if (err) {
      console.error("Error reading directory:", err);
      return res.status(500).json({ error: "Error reading directory" });
    }
    const imageUrls = files.map(file => `${req.protocol}://${req.get("host")}/uploads-slip/${file}`);
    res.json(imageUrls);
  });
});

app.use('/market', authenticateApiKey,MarketController);
app.use('/report', upload_report.single('file'),authenticateApiKey,ReportController);
app.use('/stall',  upload_slip.single('file'),authenticateApiKey,StallController);

app.listen(MY_PORT, () =>{
  console.log("Started application on port %d", MY_PORT);
});
