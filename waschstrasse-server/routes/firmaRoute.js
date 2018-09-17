const express = require('express');
const { getFirma } = require('../handlers/firmaHandler.js');

const router = express.Router({mergeParams: true});

router.route('/').
get(getFirma);

module.exports = router;