const mongoose = require('mongoose');

const VisitorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    vehicleNumber: {
        type: String,
        required: true
    },
    apartmentName: {
        type: String,
        required: true
    },
    ownerName: {
        type: String,
        required: true
    },
    ownerEmail: {
        type: String,
        required: true
    },
    visitDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Visitor', VisitorSchema);
