// const Sails = require('sails');
// const expect = require('chai').expect;

// describe('User Model', () => {
//   let app;

//   before(async () => {
//     app = await Sails.lift({
//       log: { level: 'error' },
//       models: { migrate: 'drop' }
//     });
//   });

//   after(async () => {
//     await Sails.lower();
//   });

//   let createdUser;

//   beforeEach(async () => {
//     await User.destroy({});
//     createdUser = await User.create({
//       name: 'John Doe',
//       email: 'johndoe@example.com',
//       password: 'secretpassword',
//       phone: '555-555-5555'
//     });
//   });

//   describe('#create()', () => {
//     it('should create a new User', async () => {
//       const users = await User.find();
//       expect(users).to.have.lengthOf(1);
//       expect(users[0].name).to.equal('John Doe');
//       expect(users[0].email).to.equal('johndoe@example.com');
//       expect(users[0].phone).to.equal('555-555-5555');
//     });
//   });

//   describe('#update()', () => {
//     it('should update an existing User', async () => {
//       const updatedUser = await User.update({ id: createdUser.id })
//         .set({ name: 'Jane Doe', phone: '555-555-5556' });
//       expect(updatedUser[0].name).to.equal('Jane Doe');
//       expect(updatedUser[0].phone).to.equal('555-555-5556');
//     });
//   });

//   describe('#findOne()', () => {
//     it('should return a User by email', async () => {
//       const user = await User.findOne({ email: 'johndoe@example.com' });
//       expect(user.name).to.equal('John Doe');
//       expect(user.email).to.equal('johndoe@example.com');
//       expect(user.phone).to.equal('555-555-5555');
//     });
//   });

//   describe('#destroy()', () => {
//     it('should delete a User', async () => {
//       await User.destroy({ id: createdUser.id });
//       const users = await User.find();
//       expect(users).to.have.lengthOf(0);
//     });
//   });
//

// const assert = require('assert');
// const request = require('supertest');
// const app = require('sails').app;

// describe('UserController', function() {
//   describe('#create()', function() {
//     it('should create a new user', function(done) {
//       request(app)
//         .get('/user/create')
//         .send({ username: 'testuser', email: 'testuser@e.com', password: 'password' })
//         .expect(200)
//         .end(function(err, res) {
//           if (err) {
//             return done(err);
//           }
          
//           assert.equal(res.body.username, 'testuser');
//           assert.equal(res.body.email, 'testuser@example.com');
          
//           done();
//         });
//     });
//   });
// });

const sails = require('sails');
const request = require('supertest');
const assert = require('assert');

describe('User', () => {
  before((done) => {
    sails.lift({}, (err) => {
      if (err) return done(err);
      done();
    });
  });

  after((done) => {
    sails.lower(done);
  });

  describe('#create()', () => {
    it('should create a new user', (done) => {
      const user = {
        name: 'tanu',
        email: 'tanu@example.com',
        password: '123mypass',
        phone: '1234567' 
 
      };

      request(sails.hooks.http.app)
        .post('/user')
        .send(user)
        .expect(200)
        .expect((res) => {
          const body = res.body;
          assert.equal(body.name, user.name);
          assert.equal(body.email, user.email);
        })
        .end(done);
    });
    describe('User', () => {
        describe('#update()', () => {
          it('should update an existing user', (done) => {
            const updatedUser = {
              name: 'tanuu',
              email: 'john.smith@example.com',
            };
      
            request(sails.hooks.http.app)
              .put('/user/3')
              .send(updatedUser)
              .expect(200)
              .expect((res) => {
                const body = res.body;
                assert.equal(body.name, updatedUser.name);
                assert.equal(body.email, updatedUser.email);
              })
              .end(done);
          });
        });
      });
      describe('User', () => {
        describe('#find()', () => {
          it('should return a list of users', (done) => {
            request(sails.hooks.http.app)
              .get('/user/')
              .expect(200)
              .expect((res) => {
                const users = res.body;
                assert(Array.isArray(users));
                assert(users.length > 0);
              })
              .end(done);
          });
      
          it('should return a specific user by ID', (done) => {
            request(sails.hooks.http.app)
              .get('/user/3')
              .expect(200)
              .expect((res) => {
                const user = res.body;
                assert.equal(user.id, 3);
              })
              .end(done);
          });
      
          it('should return a 404 error if user does not exist', (done) => {
            request(sails.hooks.http.app)
              .get('/user/9999')
              .expect(404, done);
          });
        });
      });
      describe('#delete()', () => {
        it('should update an existing user', (done) => {
            const deleteuser={
              name: 'fjdfjaafe',
              email: '13@fnja.com',
              phone: '431414144',
              password: '$2b$10$HuYqurdnA.8EOJuy/mrkYuqt8I0uC1QY8nMQJudZqWwGGzvXYJZSi'
          };
    
          request(sails.hooks.http.app)
            .delete('/User/2')
            // .send(deleteuser)
            .expect(200)
            .expect((res) => {
            //   const body = res.body;
            //   assert.equal(body.name, updatedUser.name);
            //   assert.equal(body.email, updatedUser.email);
            })
            .end(done);
        });
    
      });
  });
});
