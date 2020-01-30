const mongoose = require('mongoose');
var autoIncrement = require('mongoose-auto-increment');

const schema = mongoose.Schema;

let billableEngineersData = new schema({
    empId: {
        type: String,
        require: true
    },
    clientName: {
        type: String,
        require: true
    },
    empName: {
        type: String,
        require: true
    },
    dateOfDeployment: {
        type: String,
        require: true
    },
    contractEndDate: {
        type: String,
        require: true
    },
    ratecardPermonth: {
        type: Number,
        require: true
    },
    stack: {
        type: String,
        require: true
    },
    yoe: {
        type: Number,
        require: true
    }
})
autoIncrement.initialize(mongoose.connection);
billableEngineersData.plugin(autoIncrement.plugin, 'billableEmployees')

module.exports = mongoose.model('billableEmployees', billableEngineersData)