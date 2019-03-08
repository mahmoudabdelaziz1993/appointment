const express = require('express');
const router = express.Router();
const controller = require('../controllers/users');


router.get('/current_user', (req, res) => res.send(req.user));
//============================= send requests --------------
router.get('/send_request/:id',async (req, res) =>{
    const result = await controller.sendRequest(req.params.id,req.user);
    res.status(200).send(result);
});
//--------------------- cancel request ----------------------
router.get("/cancel_request/:receiverid",async (req,res)=>{
    const result = await controller.cancelRequest(req.params.receiverid,req.user);
    res.status(200).send(result);
})
//---------------------- reject request ------------------
router.get("/reject_request/:requesterid",async (req,res)=>{
    const result = await controller.rejectRequest(req.params.requesterid,req.user);
    res.status(200).send(result);
})
 module.exports = router