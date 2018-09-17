const express = require('express');
const { getWaschstrasse, updateWaschstrasse, createWaschstrasse, deleteWaschstrasse } = require('../handlers/waschstrasseHandler.js');

const router = express.Router({mergeParams: true});

router.route('/').
post(createWaschstrasse).
get(getWaschstrasse).
put(updateWaschstrasse).
delete(deleteWaschstrasse);

module.exports = router;