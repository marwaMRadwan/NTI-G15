const yargs = require("yargs")
const users= require('./utils/users')

yargs.command({
    command:"addUser",
    describe:"add new user data",
    builder:{
        name:{demandOption:true, describe:"user name"},
        phone:{demandOption:true, describe:"user phone"},
        age:{demandOption:true, describe:"user age"},
        email:{demandOption:true, describe:"user email"},
        url:{demandOption:true, describe:"user url"},
    },
    handler:(argv)=>{
        users.addUser(argv)
    }
})

yargs.argv