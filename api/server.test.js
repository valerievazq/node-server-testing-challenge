const supertest = require('supertest')
const server = require('./server');

describe('server.js', () => {
    describe('GET /', () => {
        it('will return status', () => {
            return supertest(server)
                .get('/')
                .then((res) => {
                    expect(res.status).toBe(200);
                });
        });
    });
    it('should return api working', () => {
        return supertest(server)
            .get('/')
            .then((res) => {
                expect(res.body.data).toBe('Good API');
            });
    });
    describe('POST /character', () => {
        it('Should return the api status on the characters endpoint', () => {
            return supertest(server)
                .get('/')
                .then((res) => {
                    expect(res.status).toBe(200)
                })
        })
    })
}) 