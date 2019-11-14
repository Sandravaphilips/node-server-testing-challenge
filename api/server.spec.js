const request = require('supertest');
const server = require('./server');

describe('server', () => {
    describe('[GET] / endpoint', () => {
        it('the db env is testing', () => {
        expect(process.env.DB_ENV).toBe('testing')
        })

        it('should return 200', async () => {
        const response = await request(server).get('/')
        expect(response.status).toBe(200)
        })

        it('get / with supertest syntax', () => {
        return request(server).get('/')
            .expect(200)
            .expect({ message: 'Welcome!!' })
        })

        it('get /users with supertest syntax', async () => {
            return request(server).get('/users')
                .expect(200)
                .expect('Content-Type', /json/)
        })
        
    })

    describe('[POST] / endpoint', () => {
        it('post /users with supertest syntax', async () => {
            return request(server).post('/users')
                .send({name: 'Esther', department: 'student'})
                .expect(201)
                .expect('Content-Type', /json/)
        })
    })

    describe('[DELETE] / endpoint', () => {
        it('delete /users/:id with supertest syntax', async () => {
            await request(server).post('/users')
                .send({name: 'Kiyani', department: 'student'})
            return request(server).delete('/users/1')
                .expect(200)
                .expect('Content-Type', /json/)
        })
    })

    describe('[UPDATE] / endpoint', () => {
        it('update /users/:id with supertest syntax', async () => {
            await request(server).post('/users')
                .send({name: 'Kiyani', department: 'student'})
            return request(server).put('/users/1')
                .send({name: 'Hester', department: 'student'})
                .expect(200)
                .expect('Content-Type', /json/)
        })
    })
})
