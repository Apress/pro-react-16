export const products = {
    store: {
        name: "storeProduct",
        graphql: `mutation ($id: ID, $name: String!, 
                    $category: String!, $price: Float!) {
        
                    storeProduct(id : $id, name: $name, 
                        category: $category, price: $price) {
                            id, name, category, price
                        }
                    }`
    },
    delete: {
        name: "deleteProduct",
        graphql: `mutation ($id: ID!) { deleteProduct(id: $id) }`
    }
}

export const suppliers = {
    store: {   
        name: "storeSupplier",
        graphql: `mutation ($id: ID, $name: String!, 
                    $city: String!, $products: [Int]) {
        
                    storeSupplier(id : $id, name: $name, 
                        city: $city, products: $products) {
                            id, name, city, products { name }
                    }
                }`
    },
    delete: { 
        name: "deleteSupplier",
        graphql: `mutation ($id: ID!) { deleteSupplier(id: $id) }`
    }
}
