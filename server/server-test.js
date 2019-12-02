const jest = require('jest');

// create a new review query
// send that query to the server
// should get a response 201

beforeAll(() => {
  return initializeDatabase();
});

test('server updates database on POST request', () => {
  //
})