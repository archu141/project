
const billablePackage = require('../Models/packageBillable');

exports.postPackageBillableData = (req, res, next) => {
    let packageBillableData = new billablePackage({
       dateOfPaymentByTyss: req.body.dateOfPaymentByTyss,
       dateOfPaymentByClient: req.body.dateOfPaymentByClient,
       paymentByTyss: req.body.paymentByTyss,
       paymentByClient: req.body.paymentByClient,
      
    });
    packageBillableData.save().then(result =>{
        console.log(result);
        res.json(result);
       
    }).catch(err => {
        console.log(err);
    });
}

exports.getPackageBillableData= (req, res, next) =>{
    billablePackage.find().then(billablePackagedata => {
            res.json(billablePackagedata);
        }).catch(err => {
            console.log(err);
        });
    }





