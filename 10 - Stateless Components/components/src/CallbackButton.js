import React from "react";
import { SimpleButton } from "./SimpleButton";

export function CallbackButton(props) {
    let { theme, ...childProps} = props;
    return (
        <SimpleButton {...childProps} 
            className={`btn btn-${props.theme} btn-sm m-1`} />
    )
}

CallbackButton.defaultProps = {
    text: "Default Text",
    theme: "warning"
}
