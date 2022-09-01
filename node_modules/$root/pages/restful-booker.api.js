import BaseAPI from "./base.api";

const RestfulAPI = {
    //GET
    pingAPI:(data) =>BaseAPI.get('/ping', data),
    getBookingList:(data) =>BaseAPI.get('/booking', data),

    //POST
    login:(data) =>BaseAPI.post('/auth', data),
    createBooking:(data) =>BaseAPI.post('/booking', data)
}

export default RestfulAPI;