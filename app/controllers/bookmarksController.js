const Bookmark = require('../models/bookmarks')
const validator = require('validator')
const sh = require('shorthash')

module.exports.list = (req,res) => {
    Bookmark.find()
        .then((bookmarks) => {
            res.json(bookmarks)
        })
        .catch((err) => {
            res.json(err)
        })
 }

 module.exports.create=(req,res) => {
    const bookmark = new Bookmark(req.body)
    if(validator.isURL(bookmark.original_url)) {
        bookmark.hashedUrl = sh.unique(bookmark.original_url)
        bookmark.save()
            .then((bookmark) => {
                res.json(bookmark)
            })
            .catch((err) => {
                res.json(err)
            })
    }
 }