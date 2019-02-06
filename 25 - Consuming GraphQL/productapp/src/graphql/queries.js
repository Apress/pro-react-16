export const products = {
    getAll: {
        name: "products",
        graphql: `query {
                    products { id, name, category, price}
                }`
    },
    getOne: {
        name: "product",
        graphql: `query ($id: ID!) {
                product(id: $id) {
                    id, name, category, price
                }
             }`
        }
    }

export const suppliers = {
    getAll: {
        name: "suppliers",
        graphql:`query {
              suppliers { id, name, city, products { id, name }}
            }`
    },
    getOne: {
        name: "supplier",
        graphql: `query($id: ID!) {
                supplier(id: $id) {
                    id, name, city, products { id, name }
                }
            }`
    }
}
