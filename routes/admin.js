const express = require('express');

const router = express.Router();

// .../admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  res.send('<h1>The add product page</h1><form action="/admin/add-product" method="post"><input type="text" name="title"><button type="submit">Add product</button></form>')
})

// .../admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body)
  res.redirect('/')
})

module.exports = router;