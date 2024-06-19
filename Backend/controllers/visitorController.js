const Visitor = require('../models/Visitor');

// Create a new visitor
exports.createVisitor = async (req, res) => {
    try {
        const newVisitor = new Visitor(req.body);
        await newVisitor.save();
        res.status(201).json(newVisitor);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get all visitors
exports.getVisitors = async (req, res) => {
    try {
        const visitors = await Visitor.find();
        res.status(200).json(visitors);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
