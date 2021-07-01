const express = require('express');
let router = express.Router();

router.get('/', async (req, res) => {
  res.send({
	  code: 404,
	  message: 'Not Found'
  });
});


module.exports = router;
