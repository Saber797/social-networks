import React from "react";
import { Dialogs } from "./Dialogs";
import {updateNewMessageActionCreator,sendMessageActionCreator } from '../reducerDialog'
import { connect } from "react-redux";


let mapStateToProps = (state)=>{
   return {
        dialogs: state.dialogsPage.dialogsPage.dialogs,
        messages: state.dialogsPage.dialogsPage.messages,
        newMessageText: state.dialogsPage.dialogsPage.newMessageText 
   }
}
let mapDispatchToProps = (dispatch)=>{
    return {
        onSendMassegeClick: () =>{
            dispatch(sendMessageActionCreator())
        }  ,
        onNewMassegeChange: (body) =>{
            dispatch(updateNewMessageActionCreator (body))
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs)

export default DialogsContainer;