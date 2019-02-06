module.exports = function () {
    var data = {
        products: [
            { id: 1, name: "Trail Shoes", category: "Running", price: 120 },
            { id: 2, name: "Heated Gloves", category: "Running", price: 20.95 },
            { id: 3, name: "Padded Shorts", category: "Cycling", price: 19.50 },
            { id: 4, name: "Puncture Kit", category: "Cycling", price: 34.95 },
            { id: 5, name: "Mirror Goggles", category: "Swimming", price: 79500 },

        ],
        suppliers: [
            { id: 1, name: "Just Running", city: "Houston", products: [1, 2] },
            { id: 2, name: "Miles and Smiles", city: "Paris", products: [3, 4] },            
            { id: 3, name: "Deep Dive", city: "New York", products: [5] },                    
        ]
    }
    return data
}
