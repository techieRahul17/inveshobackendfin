const mongoose = require('mongoose');
const VC = require('./models/VC');
require('dotenv').config();
console.log("Rahul");
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log('Connected for seeding...'))
    .catch(err => console.error(err));
console.log(process.env.MONGO_URI);

const sampleVCs = [
    { name: "Rahul V S", email: "rahul@vcfirm.com", profile: "Automotive VC", industries: ["automotive", "transport"] },
    { name: "Anjali", email: "anjali@fintechvc.com", profile: "Fintech VC focused on startups", industries: ["fintech", "banking"] },
    { name: "Balamurugan", email: "bala@fashionventures.com", profile: "Fashion industry specialist", industries: ["fashion", "retail"] }
];

async function seedDB() {
    await VC.deleteMany({});
    await VC.insertMany(sampleVCs);
    console.log('✅ Database seeded!');
    mongoose.connection.close();
}

seedDB();
