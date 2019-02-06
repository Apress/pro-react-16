var data = require("../../graphqlData")(); 

const mapIdsToProducts = (supplier, nameFilter) => 
    supplier.products.map(id => data.products.find(p => p.id === Number(id)))
        .filter(p => p.name.toLowerCase().includes(nameFilter.toLowerCase()));

let nextId = 100;

module.exports = {

    products: () => data.products,
    
    product: ({id}) => data.products
        .find(p => p.id === parseInt(id)),

    suppliers: () => data.suppliers.map(s => ({
        ...s, products: ({nameFilter}) => mapIdsToProducts(s, nameFilter)
    })),

    supplier: ({id}) => {
        const result = data.suppliers.find(s => s.id === parseInt(id));
        if (result) {
            return {
                ...result, 
                products: ({ nameFilter }) => mapIdsToProducts(result, nameFilter)
            }
        }
    },

    storeProduct(args) {
        const product = { ...args, id: Number(args.id)};
        if (args.id == null || product.id === 0) {
            product.id = nextId++;
            data.products.push(product);
        } else {
            data.products = data.products
                .map(p => p.id === product.id ? product : p);
        }
        return product;
    },


    storeSupplier(args) {
        const supp = { ...args, id: Number(args.id)};
        if (args.id == null) {
            supp.id = nextId++;
            data.suppliers.push(supp)
        } else {
            data.suppliers = data.suppliers.map(s => s.id === supp.id ? supp: s);
        }
        let result = data.suppliers.find(s => s.id === supp.id);
        if (result) {
            return {
                ...result, 
                products: ({ nameFilter }) => mapIdsToProducts(result, nameFilter)            
            }
        }
    },

    deleteProduct({id}) {
        id = Number(id);
        data.products = data.products.filter(p => p.id !== id);
        data.suppliers = data.suppliers.map(s => {
            s.products = s.products.filter(p => p !== id);
            return s;
        })
        return id;    
    },

    deleteSupplier({id}) {
        data.suppliers = data.suppliers.filter(s => s.id !== Number(id));
        return id;
    }
}
