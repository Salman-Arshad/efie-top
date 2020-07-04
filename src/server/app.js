/** 
  * @desc This is entry point of the application all the initializations
  * takes place here   
  * @author Salman Arshad && Syed Ghazanfer Anwar
*/

/**
 * @desc initalizing 
 */
require("dotenv").config();
/**
 * @desc Module dependencies.
 */
const express = require("express");
const io = require("socket.io")()
const bodyParser = require("body-parser");
const morgan =  require("morgan")

/**
 * @desc importing required middlewares 
 */
const handleErrors = require("./middlewares/handleErrors");
const morganMiddleware =  require("./middlewares/morganMiddleware") 

/**
 * @desc Setting up express server
 */
const port = process.env.SERVER_PORT;
const app = express();

/**
 * @desc setting middlewares 
 */

app.use(morganMiddleware);
require("./routes.js")(app);

/**
 * @desc setting middlewares 
 */

app.use(bodyParser.json());
app.use(handleErrors);

server = app.listen(port, () =>
    console.log(`app is listening at http://localhost:${port}`)
);
io.attach(server)
