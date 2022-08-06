const express = require('express');

const kontroler = require('../controllers/main');
const router = express.Router();

router.get('/', 
    kontroler.showMain);

module.exports = router;