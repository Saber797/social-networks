import React from "react";
import d from './Dialogs.module.css'
import { DialogItem } from "./DialogItem/DialogItem";
import { UserMassege } from "./UserMasseges/UserMasseges";



export const Dialogs = (props) => {
    let dialogsElement = props.dialogs.map(d => <DialogItem name={d.name} id={d.id} />)
    let massegeElement = props.messages.map(m => <UserMassege message={m.message} id={m.id} />)

    let newMessageText = props.newMessageText

    let onSendMassegeClick = () => {
        props.onSendMassegeClick()
    }

    let onNewMassegeChange = (e) => {
        let body = e.target.value
        props.onNewMassegeChange(body)

    }

    return (
        <div className={d.dialog}>
            <div className={d.dialogUser}>
                <div className={d.user}>
                    {dialogsElement}
                </div>
            </div>

            <div className={d.masseges}>
                {massegeElement}
                <div className={d.addUserPost}>
                    <textarea
                        onChange={onNewMassegeChange}
                        value={newMessageText} />
                    <button onClick={onSendMassegeClick} >Send</button>
                </div>
            </div>

        </div>
    )
}