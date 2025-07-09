// routes/customerRoutes.js
const express = require('express');
const router = express.Router();
const customerController = require('../controllers/customerController');

// ✅ Only use relative paths
router.get('/', customerController.getCustomers); // GET /api/customers
router.post('/', customerController.addCustomer); // POST /api/customers

module.exports = router;
