

module.exports.routes = {
  'POST /user': {
    controller: 'UserController',
    action: 'create',
    policies: ['validateUser']
  },
  
  'PUT /user/:id': {
    controller: 'UserController',
    action: 'update',
    policies: ['validateUser']
  },
  
  'GET /user/:id': {
    controller: 'UserController',
    action: 'retrieve'
  },
  
  'DELETE /user/:id': {
    controller: 'UserController',
    action: 'delete'
  }
};