const express=require('express');
const router=express.Router();
const clientController=require('../Controller/client');

router.post('/addClient',clientController.postClient);

router.get('/getClient',clientController.getClient);

router.post('/updateClientDetails', clientController.updateClient);

router.delete('/deleteClients/:_id',clientController.deleteClient);



module.exports=router;