var express = require('express');
var router = express.Router();
var multer = require('multer');
var File = require('../models/file');
var fs = require('fs');

var fs = require('fs');

var DIR = './uploads';
var upload = multer({dest: DIR});

// router.get('/:id', function(req, res, next) {
//     console.log(req.params.id);
//     File.findById(req.params.id, function(err, file) {
//         res.download(file.path);
//     })
// });


router.get('/:id', function (req, res, next) {
    File.findById(req.params.id, function (err, file) {
        if (err) {
            return res.status(500).json({
                title: 'Error:',
                error: err
            });
        }
        if (!file) {
            return res.status(500).json({
                title: 'No file Found.',
                error: {
                    message: "File not found."
                }
            });
        }

        fs.exists(file.path, function (exist) {
            if (!exist) {
                res.statusCode = 404;
                res.end('File not found!');
            }

            fs.readFile(file.path, function(err, data) {
                if (err) {
                    res.statusCode = 50;
                    res.end('Error getting file: ' + err);
                } else {
                    res.setHeader('Content-type', file.mimeType);
                    res.end(data);
                }
            });
        });
    });
});

router.post('/', upload.array('file'), function (req, res, next) {
    for (let file of req.files) {
        var newFile = new File({
            fieldName: file.fieldname,
            originalName: file.originalname,
            encoding: file.encoding,
            mimeType: file.mimetype,
            destination: file.destination,
            fileName: file.filename,
            path: file.path,
            size: file.size,
        });
        newFile.save(function(err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'File upload error.',
                    error: err
                })
            }
            res.status(201).json({
                message: 'File uploaded successfully,',
                obj: result
            });
        })
    }
});

router.get('/', function (req, res, next) {
    File.find()
        .exec(function(err, files) {
            if (err) {
                return res.status(500).json({
                    title: 'Could not find files',
                    error: err
                });
            }

            res.status(200).json({
                message: 'Success',
                obj: files
            })
        });
});


module.exports = router;
