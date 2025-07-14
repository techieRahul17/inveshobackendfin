require('dotenv').config();
const mongoose = require("mongoose");
const VC = require("./models/VC");

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        console.log("✅ Connected to MongoDB for seeding...");

        await VC.deleteMany({}); // Clear old data

        const vcs = [
            {
                name: "Sophia Turner",
                industry: "Fintech",
                profile: "Specializes in seed funding for Fintech startups.",
                email: "sophia.turner@vcgroup.com",
            },
            {
                name: "Rajesh Mehra",
                industry: "Healthcare",
                profile: "Investor in health-tech and medical devices companies.",
                email: "rajesh.mehra@healthvc.in",
            },
            {
                name: "Emily Zhang",
                industry: "Automotive",
                profile: "Focused on autonomous vehicles and EVs.",
                email: "emily.zhang@autovc.com",
            },
            {
                name: "Daniel Ross",
                industry: "Fashion",
                profile: "Supports sustainable fashion initiatives worldwide.",
                email: "daniel.ross@fashioncapital.com",
            },
            {
                name: "Anita Desai",
                industry: "EdTech",
                profile: "Angel investor for e-learning and education tech.",
                email: "anita.desai@learnfund.org",
            },
            {
                name: "Omar Khalid",
                industry: "AI/ML",
                profile: "Funds startups leveraging AI for enterprise software.",
                email: "omar.khalid@aimlventures.io",
            },
        ];

        await VC.insertMany(vcs);
        console.log("🌱 VC data seeded successfully!");
        process.exit();
    })
    .catch((err) => {
        console.error("❌ Error connecting to MongoDB:", err);
        process.exit(1);
    });
