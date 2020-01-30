const mongoose=require('mongoose');
var autoIncrement = require('mongoose-auto-increment');
const schema=mongoose.Schema;

let clientSchema=new schema({
    clientName:{
        type:String,
    },
    clientShortName:{
        type:String,
    },
    department:{
        type:String,
    },
    clientNo:{
        type:String,
    },
    clientEmail:{
        type:String,
    },
    companyWebsite:{
        type:String,
    },
    companyLogo:{
        type:String,
    },
    streetAddress:{
        type:String,
    },
    addressLine:{
        type:String,
    },
    city:{
        type:String,
    },
    state:{
        type:String,
    },
    zipCode:{
        type:String,
    },
    country:{
        type:String,
    },
    clientId:{
        type:String,
    }
})
autoIncrement.initialize(mongoose.connection);
clientSchema.plugin(autoIncrement.plugin, 'client')

module.exports=mongoose.model('client',clientSchema)