const express = require('express');
const router = express.Router();
const billablePackageController = require('../controllers/packageBillable');


//getting the details of package of billable employees
router.post('/postBillablePackage',billablePackageController.postBillablePackage);
router.get('/getBillablePackage',billablePackageController.getBillablePackage);


//getting the revenue based on package of employees
router.get('/revenueDetails', billablePackageController.getRevenueDetails);


module.exports = router;