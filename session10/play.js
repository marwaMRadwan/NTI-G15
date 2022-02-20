const bcryptjs = require("bcryptjs")
bcryptjs.hash("marwa",5).then(res=>console.log(res))
//$2a$05$gblxB1LV2GxbAZkrFliGL.fq9z9GyZiyhsfThHW3OUfnizM8w01w.

bcryptjs.compare("marwa", "$2a$05$gblxB1LV2GxbAZkrFliGL.fq9z9GyZiyhsfThHW3OUfnizM8w01w.").then(res=>console.log(res))

/*
123456 => lkjggfgf => 
123 => 456 => 789
*/