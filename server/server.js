require('dotenv').config()
const express = require('express')
const massive = require('massive')
const bcrypt = require('bcryptjs')
const session = require('express-session')
const mCtrl = require('./mainController')
const { CONNECTION_STRING , SERVER_PORT , SESSION_SECRET } = process.env

const app = express()
const sessionOb = {
  secret: SESSION_SECRET ,
  resave: false ,
  saveUninitialized: false
}

app.use(express.json())
app.use(session(sessionOb))


// TEST ENDPOINTS //

app.get('/test/test' , (req , res) => res.sendStatus(200) )
app.get('/test/dbtest' , mCtrl.dbtest)
app.post('/test/hashtest' , mCtrl.bcryptTest)

massive(CONNECTION_STRING).then((instance) => {
  app.set('db' , instance)
  app.listen(SERVER_PORT , () => console.log(SERVER_PORT , ' is our port in a storm'))
} )