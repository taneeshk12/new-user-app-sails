module.exports = function(req, res, next) {
    check('name', 'Name is required').notEmpty();
    check('email', 'Email is not valid').isEmail();
    check('phone', 'Phone is not valid').isMobilePhone();
    check('password', 'Password is required').notEmpty();
    
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.badRequest(errors.array());
    }
    
    next();
  };
  