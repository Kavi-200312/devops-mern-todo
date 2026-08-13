const request = require('supertest')

const {app, server } = require('../index')
const { default: mongoose } = require('mongoose')

describe('GET api/tasks', ()=>{
    it('it should return 200' ,async()=>{
        const res = await request(app).get('/api/tasks')
        expect(res.statusCode).toBe(200)
    })
    it('it should return Array' ,async()=>{
        const res = await request(app).get('/api/tasks')
        expect(Array.isArray(res.body)).toBe(true)
    })
})

afterAll(async()=>{
    await server.close();
    await mongoose.connection.close()
})