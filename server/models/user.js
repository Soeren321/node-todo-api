var mongoose = require('mongoose')

var User = mongoose.model('User', {
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    minlength: 1,
    trim: true
  }
})

/*

var newUser = new User({
  name: 'Soeren',
  email: ' soeren@vifavi.com'
})

newUser.save().then((doc) => {
  console.log('User added', doc)
}, (e) => {
  console.log('Unable to add user')
})


 */

module.exports = {User}