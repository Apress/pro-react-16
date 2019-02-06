import React, { useState, useEffect} from "react";
import { ActionButton } from "./ActionButton";

export function HooksMessage(props) {
    const [showSpan, setShowSpan] = useState(false);
    
    useEffect(() => {
        console.log("useEffect function invoked")
        return () => console.log("useEffect cleanup");
    });

    const handleClick = (event) => {
        setShowSpan(!showSpan);
        props.callback(event);
    }

    const getMessageElement = () => {
        let div = <div id="messageDiv" className="h5 text-center p-2">
                        { props.message }                            
                  </div>
        return showSpan ? <span>{ div } </span> : div;
    }

    return (
        <div>
            <ActionButton theme="primary" {...props} callback={ handleClick } />
            { getMessageElement() }
        </div>                    
    )
}
