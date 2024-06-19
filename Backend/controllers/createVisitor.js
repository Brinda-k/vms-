const Visitor = require('../models/Visitor');

exports.createVisitor = async (req, res) => {
    try {
        const { name, phone, vehicleNumber, apartmentName, ownerName, ownerEmail, phoneNumber } = req.body;
        if (!name || !phone || !vehicleNumber || !apartmentName || !ownerName || !ownerEmail || !phoneNumber) {
            return res.status(400).json({ error: "All fields are required" });
        }
        const newVisitor = new Visitor({ name, phone, vehicleNumber, apartmentName, ownerName, ownerEmail, phoneNumber });
        await newVisitor.save();
        res.status(201).json(newVisitor);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
