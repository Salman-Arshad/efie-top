/** 
  * @desc TAll the routes will declare here 
  * @author Salman Arshad && Syed Ghazanfer Anwar
*/
module.exports = (app)=>{
    homeRoutes = require('./api/homepage')
    app.get("/",homeRoutes.homepage)
}
