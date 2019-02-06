import React from "react";

export const Result = (props) => {
    return <div className="bg-light text-dark border border-dark p-2 ">
        { props.result || 0 }
    </div>
}
