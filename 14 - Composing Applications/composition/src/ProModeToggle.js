import React, { useContext } from "react";
import { ProModeContext } from "./ProModeContext";

export function ProModeToggle(props) {

    const context = useContext(ProModeContext);

    return (            
        <div className="form-check">
            <input type="checkbox" className="form-check-input" 
                value={ context.proMode } 
                onChange={ context.toggleProMode } />
            <label className="form-check-label">
                { props.label }
            </label>
        </div>
    )
}
