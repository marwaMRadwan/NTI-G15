dealWithData = require("./dealWithData")
const validtor = require("validator")
const userData = [
    {
        ele: "name",
        default: false,
        invalid: function (data) {
            if (data.length < 3) return "name must be more than 3 chars"
            else return false
        }
    },
    {
        ele: "phone",
        default: false,
        invalid:
            (data) => !validtor.isMobilePhone(data, ['ar-EG']) ? "invalid phone" : false
    },
    {
        ele: "age",
        default: false,
        invalid: (data) => data < 21 ? "invalid age" : false

    },
    { ele: "addresses", default: [], invalid: (data) => false },
    {
        ele: "email", default: false,
        invalid:
            (data) => !validtor.isEmail(data, ['ar-EG']) ? "invalid phone" : false
    },
    {
        ele: "url", default: false, invalid:
            (data) => !validtor.isURL(data, ['ar-EG']) ? "invalid phone" : false
    },
    {
        ele: "addedAt",
        default: dealWithData.timeFormatter(new Date()),
        invalid: (data) => false
    },
    {
        ele: "updatedAt",
        default: dealWithData.timeFormatter(new Date()),
        invalid: (data) => false
    }
]
module.exports = userData