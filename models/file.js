var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    fieldName: {type: String, required: true},
    originalName: {type: String, required: true},
    encoding: {type: String, required: true},
    mimeType: {type: String, required: true},
    destination: {type: String, required: true},
    fileName: {type: String, required: true},
    path: {type: String, required: true},
    size: {type: Number, required: true},
    dateAdded: {type: Date, default: Date.now},
    updated: {type: Date, default: Date.now},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

module.exports = mongoose.model('File', schema);