
const Package = require('../models/packageBillable');
const revenue = require('../models/billableEmployees');


exports.postBillablePackage = (req, res, next) => {
    let employeeName = req.body.employeeName;
    revenue.find({employeeName:employeeName}).then(packageRevenue =>{
        let dateOfDeployment = packageRevenue[0].dateOfDeployment;
        new Package({
            clientName:req.body.clientName,
            employeeName:req.body.employeeName,
            dateOfPaymentByTY:req.body.dateOfPaymentByTY,
            dateOfPaymentByClient:req.body.dateOfPaymentByClient,
            rateCardByTY:req.body.rateCardByTY,
            rateCardByClient:req.body.rateCardByClient,
            dateOfDeployment:dateOfDeployment
    }).save().then(packages=>{
        console.log(packages);
        res.json(packages);
    })
    }).catch(err=>{
        console.log(err);
    })
}


exports.getBillablePackage = (req, res, next)=>{
   Package.find().then(packages=>{
       res.json(packages);
   }).catch(err=>{
       console.log(err);
   })
}

//getting the revenue based on package of employees on dashboard

exports.getRevenueDetails = (req , res , next)=>{
    Package.aggregate([
        {
            $project:{
                dateOfDeployment:1,
                profit:{
                    $subtract:["$rateCardByClient" , "$rateCardByTY"]
                }
            }
        },
        {
            $group:{
                _id: { $year : "$dateOfDeployment"},
                revenueProfit:{ $sum : "$profit"}
            },
        }
    ]).then(billableRevenue =>{
        console.log(billableRevenue);
        res.json(billableRevenue);
    }).catch(err =>{
        console.log(err);
    })

}
