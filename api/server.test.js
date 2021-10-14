const server = require('./server.js')
const request = require('supertest')
const data = require('../data/data.js')

describe('[POST] /drinks', () => {
    let res
    beforeEach(async () => {
        res = await request(server).post('/drinks').send({ id: 5, beverage: "juice" })
    })
    it.todo('responds with status 201')
    it.todo('adds the create drink to the array')
    it.todo('responds with the newly inserted drink')
})

describe('[DELETE] /drinks', () => {
    it.todo('responds with status 200')
    it.todo('deletes the correct drink')
    it.todo('responds with the deleted drink')
})