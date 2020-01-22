const ClientDetails = require('../models/clientDetails');

//Posting ClientsDetails
exports.postClientDetails = (req, res, next) => {
    let clientName = req.body.details.clientName;
    ClientDetails.find({'clientName': clientName}).then( clientData =>{
        if(clientData.length > 0 ){
            res.json({
                msg:"exists"
            })

        }
        else{
            new ClientDetails({
                clientName: req.body.details.clientName,
                clientShortName: req.body.details.clientShortName,
                department: req.body.details.department,
                phone: req.body.details.phone,
                email: req.body.details.email,
                companyWebsite: req.body.details.companyWebsite,
                image: req.body.imagename,
                city: req.body.details.city,
                streetAddress: req.body.details.streetAddress,
                state: req.body.details.state,
                zipCode: req.body.details.zipCode,
                country: req.body.details.country,
            }).save().then(clientdetails => {
                console.log(clientdetails);
                res.json(clientdetails);
                let xy = new ClientDetails({
                    ...clientdetails._doc
                });
                const filter = { _id: clientdetails._doc._id };
                const update = { clientId: 'TY_' + clientdetails._doc.clientShortName + '_' + clientdetails._doc._id };
        
                ClientDetails.findOneAndUpdate(filter, update).then((clientDetails) => {
                    console.log('Updated Data ', clientDetails);
                });
            })
        }
    
    }).catch(err => {
        console.log(err);
    })
}




//Getting The ClientDetails
exports.getClientDetails = (req, res, next) => {
    ClientDetails.find().then(clientdetails => {
        res.json(clientdetails)
    }).catch(err => {
        console.log(err);
    })
}

//Updating Clients Details
exports.updateClientDetails = (req, res, next) => {
    let id = req.body._id
    console.log(id);
    ClientDetails.findById(id).then(clientDetails => {
        console.log(clientDetails)
        clientDetails.clientName = req.body.clientName;
        clientDetails.clientShortName = req.body.clientShortName;
        clientDetails.department = req.body.department;
        clientDetails.email = req.body.email;
        clientDetails.phone = req.body.phone;
        clientDetails.companyWebsite = req.body.companyWebsite;
        clientDetails.city = req.body.city;
        clientDetails.streetAddress = req.body.streetAddress;
        clientDetails.state = req.body.state;
        clientDetails.zipCode = req.body.zipCode;
        clientDetails.country = req.body.country;
        clientDetails.save().then(Details => {
             res.json(Details)
        })
    }).catch(err => {
        console.log(err);
    })
}

exports.deleteClientDetails = (req, res, next) => {
    let id = req.params._id;
    ClientDetails.findByIdAndRemove(id).then(clientDetails => {
        res.json(clientDetails)
    }).catch(err => {
        console.log(err);
    })
}


