class ResponseHandler{
    static resHandler = (res, statusNumber, apiStatus, data, message)=>{
        res.status(statusNumber).send({ apiStatus, data, message });
    }
}
module.exports = ResponseHandler;