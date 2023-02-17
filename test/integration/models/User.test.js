const assert = require('assert');
const bcrypt = require('bcrypt');

const User = require('User');

describe('User Model', () => {
  it('should hash password before saving', (done) => {
    const user = new User({
      name: 'Test User',
      email: 'test@user.com',
      phone: '+1234567890',
      password: 'password'
    });
    
    user.save((err) => {
      if (err) return done(err);
      
      bcrypt.compare('password', user.password, (err, isMatch) => {
        if (err) return done(err);
        
        assert(isMatch);
        
        done();
      });
    });
  });
});