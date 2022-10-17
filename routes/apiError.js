const {Router, Request, Response} = require(`express`);

const apiError = Router();

apiError.get(`/error`, (req, res)=>{
    res.render(`error`);
})

module.exports = apiError;