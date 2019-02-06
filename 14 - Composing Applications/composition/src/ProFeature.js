import React from "react";

export function ProFeature(props) {
    if (props.pro) {
        return props.render("Pro Feature");
    } else {
        return (
            <h5 className="bg-warning text-white text-center">
                This is a Pro Feature
            </h5>
        )
    }
}
