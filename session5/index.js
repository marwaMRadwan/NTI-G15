//argv
// console.log(process.argv);
// console.log(process.argv[2]+process.argv[3])
const yargs = require("yargs")
yargs.command({
    command:"add",
    builder:{
        a:{
            describe:"a val",
            demandOption:true,
            type:"String"
        },
        b:{
            describe:"a val",
            demandOption:true,
            type:"String"
        }
    },
    handler: function(argv){
        console.log(argv.a+argv.b)
    }
})

yargs.argv