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
        // Fixed: field is "industry", not "industries"
        const vcs = await VC.find({ industry: { $regex: industry, $options: 'i' } });
        res.json(vcs);
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
});

// (Optional) Trigger seeding on deployment by setting SEED=true
if (process.env.SEED === "true") {
    console.log("🌱 Seeding DB...");
    require("./seed");
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
