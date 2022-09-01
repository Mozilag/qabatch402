import { assert } from "chai";
import RestfulAPI from "../pages/restful-booker.api";

describe('As a User, i be able to Get Booking List IDs', () => {
    it('Should Successfully Get Booking List', async() =>{
        const response = await RestfulAPI.getBookingList();
        
        assert.equal(response.status, 200);
    })
})

describe('As a User, i be able to Create Booking', () => {
    it('Should Successfully Create Booking', async() =>{
        const response = await RestfulAPI.createBooking();
        
        assert.equal(response.status, 200);
        assert.containsAllKeys(response.data, ["firstname", "lastname", "totalprice", "depositpaid", "bookingdates", "additionalneeds"]);
        assert.isString(response.data.firstname);
        assert.isString(response.data.lastname);
        assert.isNumber(response.data.totalprice);
        assert.isBoolean(response.data.depositpaid);
        assert.isArray(response.data.bookingdates);
        assert.isString(response.data.additionalneeds);
    })
})