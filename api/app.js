require("dotenv").config()
const express = require("express");
const app = express();
const cors = require("cors")
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs")
const User = require("./models/User.js");
const jwt = require("jsonwebtoken")
const cookieParser = require("cookie-parser")

const bcryptSalt = bcrypt.genSaltSync(10);
const jwtSecret = 'asdjanduwnasidnow';

app.use(cookieParser())
app.use(express.json())
app.use('/uploads', express.static(__dirname + "\\uploads\\"))
app.use(cors({
   credentials: true,
   origin: 'http://localhost:5173',
}));

const URL = 'mongodb+srv://admin:admin123@pizzahust.5nmfmhn.mongodb.net/';

mongoose.connect(URL, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
   console.log('Connected to MongoDB');
});

app.listen(3001, () => {
   console.log("Server is running on port 3001");
});

app.get('/test', (req, res) => {
   res.json('ok')
})

// register user 
app.post('/register', async (req, res) => {
   const { firstName, lastName, email, password } = req.body;
   try {
      const userDoc = await User.create({
         firstName,
         lastName,
         email,
         password: bcrypt.hashSync(password, bcryptSalt),
         isAdmin: false
      });
      res.json(firstName);
   } catch (e) {
      res.status(422).json(e);
   }
});

// login user
app.post('/login', async (req, res) => {
   const { email, password } = req.body;
   const userDoc = await User.findOne({ email });
   if (userDoc) {
      const checkPass = bcrypt.compareSync(password, userDoc.password);
      if (checkPass) {
         jwt.sign({ email: userDoc.email, id: userDoc._id, firstName: userDoc.firstName, lastName: userDoc.lastName, isAdmin: userDoc.isAdmin }, jwtSecret, {}, (err, token) => {
            if (err) {
               throw err;
            }
            res.cookie('token', token).json(userDoc);
         })
      }
      else {
         res.status(422).json("Pass NOT OK");
      }
   } else {
      res.status(422).json('Not found account');
   }
})

// Get login information (email)
app.get('/profile', (req, res) => {
   const { token } = req.cookies;
   if (token) {
      jwt.verify(token, jwtSecret, {}, (err, user) => {
         if (err) {
            throw err;
         }
         res.json(user)
      })
   } else res.json(null)
})

// Log out
app.post('/logout', (req, res) => {
   res.cookie('token', '').json(true);
});

app.post('/pizza', (req, res) => {
   const { token } = req.cookies;
   if (token) {
      jwt.verify(token, jwtSecret, {}, (err, user) => {
         if (err) {
            throw err;
         }
         res.json(user)
      })
   } else res.json(null)
})

module.exports = app;
