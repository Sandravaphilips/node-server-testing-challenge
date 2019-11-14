const Users = require('./users-model')
const db = require('../data/dbConfig')

beforeEach(async () => {
   await db('users').truncate()
})

describe('users model', () => {
  describe('add function', () => {
    let users;
    it('should add a hobbit', async () => {
      await Users.add({ name: 'Sandra', department: 'student' });
      await Users.add({ name: 'Karim', department: "Team-lead" });

      users = await db('users')
      expect(users).toHaveLength(2)

      await Users.add({ name: 'Gabriel', department: 'Instructor' })

      users = await db('users')
      expect(users).toHaveLength(3)
    })
  })
})