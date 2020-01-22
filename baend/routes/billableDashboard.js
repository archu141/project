const express = require('express');
const router = express.Router();
const billableDashboardController = require('../controllers/billabledashboard');


//Getting billableEmployees details count
router.get('/getBillableEmployeesDetailsCount', billableDashboardController.getBillableEmployeesDetailsCount);

router.get('/getBillableExperienceCount', billableDashboardController.getBillableExperienceCount);

//getting the billableEmpBasedOn Client
router.get('/getBillEmployeesBasedOnClient', billableDashboardController.getBillableToClientsCount);

//getting the table of particular Employee
router.get('/getBillableToClientData/:clientId', billableDashboardController.getBillableToClientData);

//getting stackValue based on client
router.get('/getBillableDeployToClient/:clientName', billableDashboardController.getBillableDeployedToClients);


//getting the exp value based on client
router.get('/getBillableEmpExperience/:clientId', billableDashboardController.getBillableEmpExperience);


//getting the count of exp billable emp

router.get('/getBillableEmployeeExp', billableDashboardController.getBillableEmployeeExp);

module.exports = router;