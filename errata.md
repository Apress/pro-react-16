# Errata for *Pro React 16*

**All Chapters**

The `create-react-app` package has changed to force the use of more recent versions, which means the instructions in the book for creating projects will produce an error like this:

    A template was not provided. This is likely because you're using an outdated version of create-react-app.
    Please note that global installs of create-react-app are no longer supported

To resolve this issue, run the following command to remove the globally installed package:

    npm uninstall --global create-react-app

Now you can create the projects using the commands shown in the book. For example, here is the command from Chapter 1 that creates the first project used in the book:

    npx create-react-app todo

As long as you have removed the globally-installed version, the project should be created. However, it won't be with the same version of React that I used to write the book, so please check back here if you encounter a problem you suspect is related to versioning to see if I have posted a workaround. Contact me at the email address given in the book if you encounter a problem for which I have not posted a correction.

(Thanks to Loïc Njike for reporting this problem)

-----

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

**Chapter 10**

The code in Listing 11-13 does not work when the project has been created using recent versions of the Create React App package. Projects are created with strict mode enabled, which changes the way that updates are handled during development in order to detect accidental side-effects. To resolve the problem, use the following code in the App.js file:

    import React, { useState } from "react";
    import { Summary } from "./Summary";

    export default function App() {
        const [counter, setCounter] = useState(0);
        const incrementCounter = (increment) => setCounter(counter + increment);

        const [names, setNames] = useState(["Bob", "Alice", "Dora"]);

        function reverseNames() {
            setNames(names => names.reverse());
        }
        
        function promoteName(name) {
            setNames(names => [name, ...names.filter(val => val !== name)]);
        }

        return (
            <table className="table table-sm table-striped">
            <thead>
                <tr><th>#</th><th>Name</th><th>Letters</th></tr>
            </thead>
            <tbody>
                { names.map((name, index) => 
                    <tr key={ name }>
                    <Summary index={ index } name={ name } 
                        reverseCallback={ reverseNames } 
                        promoteCallback={ promoteName } 
                        counter={counter}
                        incrementCallback={incrementCounter}
                    />
                    </tr>
                )}
            </tbody>
            </table>
        );
    }

(Thanks to Mariusz Aleksandrowicz and Loic Njike for reporting this problem).

---
