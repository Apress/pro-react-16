# Errata for *Pro React 16*

**Chapter 4**

The code in Listings 4-37 and 4-38 should access the `name` and `weather` properties via `this` as described in the text. The code in the book works but you should not rely on the name of the variable an object is assigned to access that object's features. 

Use the following instead of Listing 4-37:

    let myData = {
        name: "Adam",
        weather: "sunny",
        printMessages: function () {
            console.log(`Hello ${this.name}.`);
            console.log(`Today is ${this.weather}.`);
        }
    };
    myData.printMessages();

Use the following instead of Listing 4-38:

    let myData = {
        name: "Adam",
        weather: "sunny",
        printMessages() {
            console.log(`Hello ${this.name}.`);
            console.log(`Today is ${this.weather}.`);
        }
    };
    myData.printMessages();


(Thanks to David Eisner for reporting this problem)

---

