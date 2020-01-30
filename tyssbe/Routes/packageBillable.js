const express=require('express');
const router=express.Router();
const PackagebillableController=require('../Controller/packageBillable');

router.post('/addBillablePackageData',PackagebillableController.postPackageBillableData);

router.get('/getBillablePackageData',PackagebillableController.getPackageBillableData);



module.exports=router;