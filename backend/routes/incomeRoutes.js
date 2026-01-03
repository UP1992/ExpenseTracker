const express = require("express");
const {
    addIncome, getAllIncomes,
    deleteIncome, downloadIncomeExcel
} = require('../controllers/incomeController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/add', protect, addIncome);
router.get('/all', protect, getAllIncomes);
router.delete('/delete/:id', protect, deleteIncome);
router.get('/download-excel', protect, downloadIncomeExcel);

module.exports = router;