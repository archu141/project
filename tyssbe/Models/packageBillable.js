const mongoose = require('mongoose');
// var autoIncrement = require('mongoose-auto-increment');

const schema = mongoose.Schema;

let packageBillable = new schema({
    dateOfPaymentByTyss: {
        type: String,
        require: true
    },
    dateOfPaymentByClient: {
        type: String,
        require: true
    },
    paymentByTyss: {
        type: Number,
        require: true
    },
    paymentByClient: {
        type: Number,
        require: true
    }

})
// autoIncrement.initialize(mongoose.connection);
// billableEngineersData.plugin(autoIncrement.plugin, 'billablePackage')

module.exports = mongoose.model('billablePackage', packageBillable)