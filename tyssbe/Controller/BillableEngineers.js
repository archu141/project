const client = require ('../Models/client');
const billableEmployees = require('../Models/BillableEnginners');


exports.postBillabeEngineerData = (req, res, next) => {
    let billableEmp = new billableEmployees({
        empId: req.body.empId,
        clientName: req.body.clientName,
        empName: req.body.empName,
        dateOfDeployment: req.body.dateOfDeployment,
        contractEndDate: req.body.contractEndDate,
        ratecardPermonth: req.body.ratecardPermonth,
        stack: req.body.stack,
        yoe: req.body.yoe
     });
     billableEmp.save().then(engineers =>{
         console.log(engineers);
         res.json(engineers);
         let xy = new billableEmployees({
             ...billableEmployees._doc
         });
 
         const filter = {_id:engineers._doc._id};
         const update = {empId:'TY_' + engineers._doc._id};
         billableEmployees.findOneAndUpdate(filter,update).then((engineers) =>{
             console.log('Updated engineers data', engineers)
         });
     }).catch(err => {
         console.log(err);
     });
    // let clientId1 = req.params._id;
    // client.findById(clientId1).then(clientDetail =>{
    //     console.log(clientDetail.clientId)
   
    //  new billableEmployees({
    //     clientId : clientDetail.clientId,
    //       ,
    //     }).save().then(engineers =>{
    //         console.log(engineers);
    
    //         res.json(engineers);
    //     }).catch(err => {
    //         console.log(err);
    //     });
    // })

    }

exports.getBillabeEngineerData = (req, res, next) =>{
    billableEmployees.find().then(engineersdata => {
            res.json(engineersdata);
        }).catch(err => {
            console.log(err);
        });
    }
    
// exports.deleteBillabeEngineerData = (req, res, next) => {
//     let id = req.params.id;
//     billableEmployees.findByIdAndRemove(id).then(result => {
//         res.json(result);
//     }).catch(err => {
//         console.log(err);
//     })
// }
