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
    handler:(argv)=>users.addUser(argv)
})
yargs.command({
    command:"showAll",
    handler:()=>users.showAll()
})
yargs.command({
    command:"addAddressToUser",
    builder:{
        id:{demandOption:true},
        addrType:{demandOption:true},
        addrDetails:{demandOption:true}
    },
    handler: (argv)=> users.addAddress(argv)
})
yargs.argv