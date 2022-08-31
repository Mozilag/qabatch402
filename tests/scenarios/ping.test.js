import { assert } from "chai";
import RestfulAPI from "../pages/restful-booker.api";

describe('As a User, i be able to Ping', () => {
    it('Should Successfully Ping the API', async() =>{
        const response = await RestfulAPI.pingAPI();
        assert.equal(response.status, 201);
    })
})