var faker = require("faker");
faker.seed(100);
var categories = ["Watersports", "Soccer", "Chess"];
var products = [];
for (let i = 1; i <= 503; i++) {
    var category = faker.helpers.randomize(categories);
    products.push({
        id: i,
        name: faker.commerce.productName(),
        category: category,
        description: `${category}: ${faker.lorem.sentence(3)}`,
        price: Number(faker.commerce.price())
    })
}
var orders = [];
for (let i = 1; i <= 103; i++) {
    var fname = faker.name.firstName(); var sname = faker.name.lastName();
    var order = {
        id: i, name: `${fname} ${sname}`,
        email: faker.internet.email(fname, sname),
        address: faker.address.streetAddress(), city: faker.address.city(),
        zip: faker.address.zipCode(), country: faker.address.country(),
        shipped: faker.random.boolean(), products:[]
    }
    var productCount = faker.random.number({min: 1, max: 5});
    var product_ids = [];
    while (product_ids.length < productCount) {
        var candidateId = faker.random.number({ min: 1, max: products.length});
        if (product_ids.indexOf(candidateId) === -1) {
            product_ids.push(candidateId);
        }
    }
    for (let j = 0; j < productCount; j++) {
        order.products.push({
            quantity: faker.random.number({min: 1, max: 10}),
            product_id: product_ids[j]
        })
    }
    orders.push(order);
}

module.exports = () => ({ categories, products, orders })       
