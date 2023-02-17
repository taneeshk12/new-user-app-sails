module.exports = {
  tableName: 'user',
  attributes: {
    name: { type: 'string', required: true },
    email: { type: 'string', unique: true, required: true },
    phone: { type: 'string', unique: true, required: true },
    password: { type: 'string', required: true },
  },
  customToJSON: function() {
        return _.omit(this, ['password']);
      },
};
// module.exports = {
//   tableName: 'users',
//   attributes: {
//     name: { type: 'string', required: true },
//     email: { type: 'string', unique: true, required: true },
//     phone: { type: 'string', unique: true, required: true },
//     password: { type: 'string', required: true},
//   },
//   customToJSON: function() {
//     return _.omit(this, ['password']);
//   },
// };

// module.exports = {
//   attributes: {
//     name: { type: 'string', required: true },
//     email: { type: 'string', required: true, unique: true },
//     phone: { type: 'string', required: true , unique: true},
//     password: { type: 'string', required: true },
//   },

//   customToJSON: function() {
//     return _.omit(this, ['password']);
//   },
// };