const expect = require('expect');
const request = require ('supertest');
const {User} = require('../models/User');
const controller = require('../controllers/users');
const {mongoose} = require("../services/db");

describe("testing fun ",()=>{
    var id = "5c817fc8ea538a0df4a13e7a"
    var user ={"password":null,"email":"mhmodscrewy@gmail.com","_id":"5c8197104c3e9317b4681329","name":"mhmod screwy","social_id":"102301396727943133615","image":"https://lh4.googleusercontent.com/-L5h-DqWWkwQ/AAAAAAAAAAI/AAAAAAAAAFA/fRyWRemAzhI/s50/photo.jpg","provider":"google","coming_reqquest":[],"sent_request":[],"__v":19,"appointments":[]};


    it("send appointment request",(done)=>{
        var res = controller.sendRequest(id,user);
        expect(res.sent_request[0].receiver).toBe(id);
        done();
    });

});