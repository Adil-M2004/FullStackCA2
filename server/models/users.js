const mongoose = require(`mongoose`)

const User = new mongoose.Schema(
   {
        first_name: {type: String},
        last_name: {type: String},
        birthdate: {type: String},
        password: {type: String, required: true}
   },
   {
       collection: `users`
   })

module.exports = mongoose.model(`users`, User)
