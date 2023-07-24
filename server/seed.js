const { faker } = require("@faker-js/faker")
const MongoClient = require("mongodb").MongoClient
const mongoUri = require("./db.config").uri
const _ = require("lodash")
async function main() {
  const uri = mongoUri
  const client = new MongoClient(uri)

  try {
    await client.connect()
    const productsCollection = client.db("foodie").collection("products")
    const categoriesCollection = client.db("foodie").collection("categories")

    // productsCollection.drop()
    let categories = ["breakfast", "lunch", "dinner", "drinks"].map(
      (category) => ({ name: category })
    )
    await categoriesCollection.insertMany(categories)

    let imageUrls = [
      "https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/1_mfgcb5.png",
      "https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/2_afbbos.png",
      "https://res.cloudinary.com/dlv0lekro/image/upload/v1657056151/food-ordering-app/3_iawvqb.png",
    ]

    let products = []
    for (let i = 0; i < 10; i++) {
      let newProduct = {
        name: faker.commerce.productName(),
        adjective: faker.commerce.productAdjective(),
        description: faker.commerce.productDescription(),
        price: faker.commerce.price(),
        category: _.sample(categories),
        imageUrls: _.sample(imageUrls),
      }
      products.push(newProduct)
    }
    await productsCollection.insertMany(products)
  } catch (err) {
    console.error(err)
  } finally {
    await client.close()
  }
}

main()
