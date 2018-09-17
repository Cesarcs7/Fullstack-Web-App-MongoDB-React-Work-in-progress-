const express = require('express');
const { getFeed } = require('../handlers/feedHandler.js');

const router = express.Router({mergeParams: true});

router.route('/').
get(getFeed);

module.exports = router;