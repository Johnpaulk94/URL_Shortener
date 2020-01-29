const express = require('express')
const router = express.Router()
const bookmarksController = require('../app/controllers/bookmarksController')

router.get('/bookmarks',bookmarksController.list)

router.post('/bookmarks',bookmarksController.create)



module.exports = router
