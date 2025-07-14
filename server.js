const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const VC = require('./models/VC');

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => console.error('❌ MongoDB connection error:', err));

// API to fetch VCs by industry
app.get('/api/vcs', async (req, res) => {
    const { industry } = req.query;
    try {
        const vcs = await VC.find({ industries: { $regex: industry, $options: 'i' } });
        res.json(vcs);
    } catch (err) {
        res.status(500).json({ error: 'Server error' });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
