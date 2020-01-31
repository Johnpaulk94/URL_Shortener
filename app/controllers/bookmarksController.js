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


module.exports.show=(req,res)=> {
    const id = req.params.id
    Bookmark.findById(id)
        .then((bookmark)=> {
            if(bookmark) {
                res.json(bookmark)
            } else {
                res.json({})
            }
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


module.exports.update =(req,res) => {
    const id = req.params.id
    const body = req.body
    Bookmark.findByIdAndUpdate(id,body,{new:true, runValidators: true})
        .then((bookmark) => {
            if(bookmark) {
                res.json(bookmark)
            } else {
                res.json({})
            }
        })
        .catch((err)=> {
            res.json(err)
        })
}


module.exports.destroy=(req,res) => {
    const id = req.params.id
    Bookmark.findByIdAndDelete(id)
        .then((bookmark) => {
            if(bookmark) {
                res.json(bookmark)
            } else {
                res.json({})
            }
        })
        .catch((err) => {
            res.json(err)
        })
}