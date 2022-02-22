const multer = require("multer")
const upload = multer({ dest: 'images/profile/' })
module.exports = upload