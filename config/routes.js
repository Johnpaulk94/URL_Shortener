const express = require('express')
const router = express.Router()
const bookmarksController = require('../app/controllers/bookmarksController')

router.get('/bookmarks',bookmarksController.list)
router.get('/bookmarks/:id',bookmarksController.show)
router.put('/bookmarks/:id',bookmarksController.update)
router.delete('/bookmarks/:id',bookmarksController.destroy)
router.post('/bookmarks',bookmarksController.create)



module.exports = router
