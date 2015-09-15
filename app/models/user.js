var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');
var crypto = require('crypto');
var Link = require('./link');

var User = db.Model.extend({
  tableName: 'users',
  //hasTimestamps: true,
  defaults: {
    //visits: 0
  },
  links: function() {
    return this.hasMany(Link);  
  },
  // initialize: function(){
  //   // var username = options.json.username;
  //   // var password = options.json.password;
  //       // console.log(username, password);        
  //   this.on('creating', function(model, attrs, options){
  //     bcrypt.hash(password, null, null, function(err, hash) {
  //       model.set({password: hash});
  //     });
  //   });
  // }
});

// bcrypt.hash("bacon", null, null, function(err, hash) {
//     // Store hash in your password DB.
// });

module.exports = User;
