const Billable = require('../models/billableEmployees');
const clients = require('../models/clientDetails');

exports.getBillableEmployeesDetailsCount = (req, res, next) => {
    Billable.aggregate([{
        $group: {
            _id: { stack: "$stack" },
            count: { $sum: 1 }
        }
    },
    { $match: { count: { "$gte": 1 } } }
    ]).then(billableEmployeesDetailsCount => {
        // var result=[];
        // for(var i in billableEmployeesDetailsCount)
        //  result.push([i,billableEmployeesDetailsCount[i]]);
        //  console.log(result);
        res.json(billableEmployeesDetailsCount);

    }).catch(err => {
        console.log(err);
    })
}

exports.getBillableToClientsCount = (req, res, next) => {

    Billable.aggregate([{
        $group: {
            _id: { clientId: "$clientId" },
            count: { $sum: 1 }
        }
    },
    { $match: { count: { "$gte": 1 } } }
    ]).then(billableEmployeesCount => {
        res.json(billableEmployeesCount);

    }).catch(err => {
        console.log(err);
    })


}


exports.getBillableExperienceCount = (req, res, next) => {
    Billable.aggregate([{
        $group: {
            _id: { yearOfExperience: "$yearOfExperience" },
            count: { $sum: 1 }
        }
    },
    { $match: { count: { "$gte": 1 } } }
    ]).then(billableEmployeesExpDetailsCount => {
        res.json(billableEmployeesExpDetailsCount);
    }).catch(err => {
        console.log(err);
    })
}

exports.getBillableToClientData = (req, res, next) => {
    let clientId = req.params.clientId;
    Billable.find({ clientId: clientId }).then(billableData => {
        console.log(billableData);
        res.json(billableData);
    }).catch(err => {
        console.log(err);
    })
}

exports.getBillableDeployedToClients = (req, res, next) => {
    let clientName = req.params.clientName;
    console.log(clientName)
    Billable.aggregate([
        { $match: { clientName: clientName } },
        {
            $group: {
                _id: {
                    stack: "$stack",
                },
                count: { "$sum": 1 }
            }
        }
    ]).then(billableDetails => {
        console.log(billableDetails);
        res.json(billableDetails);
    }).catch(err => {
        console.log(err);
    })

}

exports.getBillableEmpExperience = (req, res, next) => {
    let clientId = req.params.clientId;
    console.log(clientId);
    Billable.aggregate([
        { $match: { clientId: clientId } },
        {
            $project:{
                dateOfDeployment:1,
                lessThan0Year:{
                    $cond:[{$eq:["$yearOfExperience",0]},1,0]
                },
                greaterThan0Year:{
                    $cond:[{$gt:["$yearOfExperience",0]},1,0]
                }

            }
        },
        {
            $group: {
                _id: {$year:"$dateOfDeployment"},
                countFresher:{$sum:"$lessThan0Year"},
                countExp:{$sum:"$greaterThan0Year"}
                }
                
            
        }
    
    ]).then(billableExpDetails => {
        console.log(billableExpDetails);
        res.json(billableExpDetails);
    }).catch(err => {
        console.log(err);
    })

}


exports.getBillableEmployeeExp = (req, res, next) => {
    
    Billable.aggregate([
        {
            $project:{
                dateOfDeployment:1,
                lessThan0Year:{
                    $cond:[{$eq:["$yearOfExperience",0]},1,0]
                },
                greaterThan0Year:{
                    $cond:[{$gt:["$yearOfExperience",0]},1,0]
                }

            }
        },
        {
            $group: {
                _id: {$year:"$dateOfDeployment"},
                countFresher:{$sum:"$lessThan0Year"},
                countExp:{$sum:"$greaterThan0Year"}
                },
                
            
        }
    
    ]).then(billableExpDetails => {
        console.log(billableExpDetails);
        res.json(billableExpDetails);
    }).catch(err => {
        console.log(err);
    })

}



