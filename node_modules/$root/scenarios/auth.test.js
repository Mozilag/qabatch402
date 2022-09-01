import { assert } from "chai";
import RestfulAPI from "../pages/restful-booker.api";
import * as data from "../data/user.data";

describe('As a User, i be able to Login', () => {
    it('Should successfully login using valid data', async () =>{
        const response = await RestfulAPI.login(data.VALID_USER);

        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ["token"]);
        assert.isString(response.data.token);
    });
});