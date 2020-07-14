const express = require('express');
const router = express.Router();
const {
  sayHelloController
} = require('./controller');


//HELLO
router.get('/hello', sayHelloController);



module.exports = router;