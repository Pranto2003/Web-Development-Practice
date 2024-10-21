const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
  res.send('Blogs home page')
})

router.get('/about', (req, res) => {
  res.send('About birds')
})

router.get('/blogpost/:slug', (req, res) => {
    res.send(`You have come to ${req.params.slug}`)
  })

module.exports = router