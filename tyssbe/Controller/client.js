const client = require('../Models/client');

exports.postClient = (req, res, next) => {
    const client1 = new client({
       clientName: req.body.clientName,
       clientShortName: req.body.clientShortName,
       department: req.body.department,
       clientNo: req.body.clientNo,
       clientEmail: req.body.clientEmail,
       companyWebsite: req.body.companyWebsite,
       companyLogo: req.body.imagename,
       streetAddress: req.body.streetAddress,
       addressLine: req.body.addressLine,
       city: req.body.city,
       state: req.body.state,
       zipCode:req.body.zipCode,
       country:req.body.country
    });
    client1.save().then(clients =>{
        console.log(clients);
        res.json(clients);
        let xy = new client({
            ...clients._doc
        });

        const filter = {_id:clients._doc._id};
        const update = {clientId:'TY_' + clients._doc.clientShortName + '_'+clients._doc._id};
        client.findOneAndUpdate(filter,update).then((clients) =>{
            console.log('Updated clients data', clients)
        });
    }).catch(err => {
        console.log(err);
    });
}

exports.getClient = (req, res, next) => {
    client.find().then(clientsData => {
        // console.log(clientsData);
        res.json(clientsData);
    }).catch(err => {
        console.log(err);
    });
}

exports.updateClient = (req ,res , next) => {
    let clientId = req.body._id;
    client.findById(clientId).then(clientsData1 =>{
        clientsData1.clientName = req.body.clientName;
        clientsData1.clientShortName = req.body.clientShortName;
        clientsData1.department = req.body.department;
        clientsData1.clientNo = req.body.clientNo;
        clientsData1.clientEmail = req.body.clientEmail;
        clientsData1.companyWebsite = req.body.companyWebsite;
        clientsData1.companyLogo = req.body.companyLogo;
        clientsData1.streetAddress = req.body.streetAddress;
        clientsData1.addressLine = req.body.addressLine;
        clientsData1.city = req.body.city;
        clientsData1.state = req.body.state;
        clientsData1.zipCode = req.body.zipCode;
        clientsData1.country = req.body.country;
        clientsData1.save();
        res.json(clientsData1);
    }).catch(err =>{
        console.log(err);
    })
} 

exports.deleteClient = (req, res, next) => {
    let id = req.params._id;
    client.findByIdAndRemove(id).then(result => {
        console.log(result);
        res.json(result);
    }).catch(err => {
        console.log(err);
    })
}




