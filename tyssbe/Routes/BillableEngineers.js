const express=require('express');
const router=express.Router();
const billableController=require('../Controller/BillableEngineers');

router.post('/addBillabeEngineerData',billableController.postBillabeEngineerData);

router.get('/getBillabeEngineerData',billableController.getBillabeEngineerData);

// router.delete('/deleteBillabeEngineerData/:id',billableController.deleteBillabeEngineerData);

// router.post('/updateBillabeEngineerData/:_id', billableController.updateBillabeEngineerData);


module.exports=router;


