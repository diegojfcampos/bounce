const app = require("../src/app");
const request = require("supertest");

describe('Testint Application Server', () => {
    it('should get main route /', async () =>{
        const res = await request(app)
        .get("/")
    })

})