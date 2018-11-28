const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TaskSchema = new Schema({
    taskDesc: {type: String, required: true, max: 255},
    assignee: {type: String, required: true, max: 50},
});


// Export the model
module.exports = mongoose.model('Task', TaskSchema);