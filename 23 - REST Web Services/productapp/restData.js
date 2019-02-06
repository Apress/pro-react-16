module.exports = function () {
    var data = {
        products: [
            { id: 1, name: "Kayak", category: "Watersports", price: 275 },
            { id: 2, name: "Lifejacket", category: "Watersports", price: 48.95 },
            { id: 3, name: "Soccer Ball", category: "Soccer", price: 19.50 },
            { id: 4, name: "Corner Flags", category: "Soccer", price: 34.95 },
            { id: 5, name: "Stadium", category: "Soccer", price: 79500 },
            { id: 6, name: "Thinking Cap", category: "Chess", price: 16 },
            { id: 7, name: "Unsteady Chair", category: "Chess", price: 29.95 },
            { id: 8, name: "Human Chess Board", category: "Chess", price: 75 },
            { id: 9, name: "Bling Bling King", category: "Chess", price: 1200 }
        ],
        suppliers: [
            { id: 1, name: "Surf Dudes", city: "San Jose", products: [1, 2] },
            { id: 2, name: "Goal Oriented", city: "Seattle", products: [3, 4, 5] },            
            { id: 3, name: "Bored Games", city: "New York", products: [6, 7, 8, 9] },                    
        ]
    }
    return data
}
