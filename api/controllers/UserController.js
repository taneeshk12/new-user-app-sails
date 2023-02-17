const bcrypt = require('bcrypt');
const { check, validationResult } = require('express-validator');

module.exports = {
  create: async function(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.badRequest(errors.array());
    }
    
    const { name, email, phone, password } = req.body;
    console.log(name);
    
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser = await User.create({ name, email, phone, password: hashedPassword }).fetch();
    console.log(newUser);
    return res.json(newUser);
  },


  
  update: async function(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.badRequest(errors.array());
    }
    
    const { name, email, phone } = req.body;
    
    const updatedUser = await User.updateOne({ id: req.params.id })
      .set({ name, email, phone })
      .fetch();
    
    return res.ok(updatedUser);
  },
  
  retrieve: async function(req, res) {
    const user = await User.findOne({ id: req.params.id }).omit(['password']);
    
    if (!user) {
      return res.notFound();
    }
    
    return res.ok(user);
  },
  
  delete: async function(req, res) {
    const user = await User.destroyOne({ id: req.params.id });
    
    if (!user) {
      return res.notFound();
    }
    
    return res.ok(user);
  }
};

// // api/policies/validateUser.js

// module.exports = function(req, res, next) {
//   check('name', 'Name is required').notEmpty();
//   check('email', 'Email is not valid').isEmail();
//   check('phone', 'Phone is not valid').isMobilePhone();
//   check('password', 'Password is required').notEmpty();
  
//   const errors = validationResult(req);
//   if (!errors.isEmpty()) {
//     return res.badRequest(errors.array());
//   }
  
//   next();
// };