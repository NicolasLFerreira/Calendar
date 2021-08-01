import React, { Component } from "react"
import Month from "./Month"


function Year(props) {
    var index = props.monthNum - 1
    return (
        <div className="h-100">
            <Month key={index}
                index={index}
                refresh={props.refresh} />
        </div>
    )
}

export default Year