import { assert } from "chai";
import RestfulAPI from "../pages/restful-booker.api";

describe('As a User, i be able to Get Booking List IDs', () => {
    it('Should Successfully Get Booking List', async() =>{
        const response = await RestfulAPI.getBookingList();
        
        assert.equal(response.status, 200);
    })
})