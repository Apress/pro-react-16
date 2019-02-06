import React, { useState } from "react";
import { Summary } from "./Summary";
import ReactDOM from "react-dom";

let names = ["Bob", "Alice", "Dora"]    

function reverseNames() {
    names.reverse();
    ReactDOM.render(<App />, document.getElementById('root'));    
}

function promoteName(name) {
    names = [name, ...names.filter(val => val !== name)];
    ReactDOM.render(<App />, document.getElementById('root'));    
}

export default function App() {
    const [counter, setCounter] = useState(0);

    const incrementCounter = (increment) => setCounter(counter + increment);
        
    return (  
        <table className="table table-sm table-striped">
            <thead>
                <tr><th>#</th><th>Name</th><th>Letters</th></tr>
            </thead>
            <tbody>
                { names.map((name, index) => 
                    <tr key={ name }>
                        <Summary index={index} name={name} 
                            reverseCallback={reverseNames}
                            promoteCallback={promoteName}
                            counter={ counter }
                            incrementCallback={ incrementCounter }
                        />
                    </tr>                        
                )}
            </tbody>
        </table> 
    )
}
