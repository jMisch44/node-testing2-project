const server = require('./server.js')
const request = require('supertest')
const db = require('../data/dbConfig')

// beforeAll(async () => {
//     await db.migrate.rollback()
//     await db.migrate.latest()
// })

// beforeEach(async () => {
//     await db.seed.run()
// })

// afterAll(async () => {
//     await db.destroy()
// })

describe('[POST] /drinks', () => {
    // let res
    // beforeEach(async () => {
    //     res = await request(server).post('/drinks').send({ beverage: "juice" })
    // })
    it.todo('responds with status 201'
    // , () => {
    //     expect(res.status).toBe(201)
    // }
    )
    it.todo('adds the create drink to the array'
    // , () => {
    //     const drinks = db('drinks')
    //     expect(drinks).toHaveLength(5)
    // }
    )
    it.todo('responds with the newly inserted drink'
    // , () => {
    //     expect(res.body).toMatchObject({ id: 5, beverage: "juice" })
    // }
    )
})

describe('[DELETE] /drinks', () => {
    it.todo('responds with status 200')
    it.todo('deletes the correct drink')
    it.todo('responds with the deleted drink')
})