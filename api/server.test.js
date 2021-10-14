const server = require('./server.js')
const request = require('supertest')
let data = require('../data/data.js')

beforeEach(() => {})

describe('[POST] /drinks', () => {
    let res
    beforeEach(async () => {
        res = await request(server).post('/drinks').send({ id: 5, beverage: "juice" })
    })
    it('responds with status 201', () => {
        expect(res.status).toBe(201)
    })
    it('adds the create drink to the array', () => {
        const drinks = [...data, res.body]
        expect(drinks).toHaveLength(5)
    })
    it('responds with the newly inserted drink', () => {
        expect(res.body).toMatchObject({ id: 5, beverage: "juice" })
    })
})

describe('[DELETE] /drinks', () => {
    it.todo('responds with status 200')
    it.todo('deletes the correct drink')
    it.todo('responds with the deleted drink')
})