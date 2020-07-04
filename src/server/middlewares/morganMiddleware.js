const chalk = require("chalk"); // or you can use the require('chalk') syntax too
const morgan =  require("morgan")
module.exports = morgan(function (tokens, req, res) {
        return [
            chalk.hex("#34ace0").bold(tokens.method(req, res)),
            chalk.hex("#ffb142").bold(tokens.status(req, res)),
            chalk.hex("#ff5252").bold(tokens.url(req, res)),
            chalk.hex("#2ed573").bold(tokens["response-time"](req, res) + " ms"),
            chalk.yellow(tokens["remote-addr"](req, res)),
            "",
        ].join(" ");
    });

