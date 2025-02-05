const mongoose = require(`mongoose`)

const Products = new mongoose.Schema(
   {
        
   },
   {
       collection: `products`
   })

module.exports = mongoose.model(`products`, Products)
