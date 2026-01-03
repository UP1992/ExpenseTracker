const mongoose = require("mongoose");

const IncomeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    icon: { type: String },
    source: { type: String, required: true }, // Example values: 'Salary', 'Business', 'Investments', etc.
    amount: { type: Number, required: true },
    date: { type: Date, default: Date.now },
}, {
    timestamps: true,
})

module.exports = mongoose.model("Income", IncomeSchema);

// to Continue video : 1:24:37