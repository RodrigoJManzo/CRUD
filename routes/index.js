const {Router, Request, Response} = require(`express`);

const indexroutes = Router();

indexroutes.get(`/`, (req, res)=>{
    res.render(`index`);
});

module.exports = indexroutes;
