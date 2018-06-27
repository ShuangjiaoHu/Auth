const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose
    .connect('mongodb://authUser1:authUser1@ds219191.mlab.com:19191/auth')
    .then(() => console.log('DB connect'))
    .catch(err => console.log(err));

module.exports = mongoose;