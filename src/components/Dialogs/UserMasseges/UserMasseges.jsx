import React from "react";
import m from './UserMasseges.module.css'


 export const UserMassege = (props) => {
    
    
    return (
        <div>
            <div className={m.message}>{props.message}</div>
        </div>
    )
}