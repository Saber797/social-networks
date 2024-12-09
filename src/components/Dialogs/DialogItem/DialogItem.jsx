import React from "react";
import d from './Dialog.module.css'
import { NavLink } from "react-router-dom";
export const DialogItem = (props) => {
    
    
    let path = "/Dialogs/" + props.id
    return (
        <div>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}