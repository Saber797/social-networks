import React from "react";
import { connect } from "react-redux";
import { Freinds } from "./Freinds";


let initialState = {
    freinds:[
        { id: 1, name: "Sasha" },
        { id: 2, name: "Petr" },
        { id: 3, name: "Vasya" },
    ]
}

let mapStateToProps = (state=initialState)=>{
    return {
        freinds: state.freindsPage.freinds
    }
    
}


 export const FreindsContainer = connect(mapStateToProps)(Freinds)

 
 
