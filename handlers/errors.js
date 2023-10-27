const colors = require("colors")
module.exports = (client) => {
process.on('unhandledRejection', (reason, p) => {
        console.log(' [antiCrash] :: Unhandled Rejection/Catch');
        console.log(reason, p);
    })
process.on("uncaughtException", (err, origin) => {
        console.log(' [antiCrash] :: Uncaught Exception/Catch');
        console.log(err, origin);
    })



setTimeout(() => {
    if(!client || !client.user) {
    console.log("The Client didn't Login Proccesing Kill 1".brightRed)

        process.kill(1);
    } else {
        console.log("The Client Has Logged In Successfully".brightGreen)
    }
}, 10000)

setInterval(() => {
    if(!client || !client.user) {
    console.log("The Client didn't Login Proccesing Kill 1".brightRed)

        process.kill(1);
    } else {
        
    }
}, 30000)

}