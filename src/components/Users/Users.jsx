import React from "react";
import w from './Users.module.css'




export const Users = (props) => {
    console.log(props);

    return (
        <div>
            {props.users.map(u => <div key={u.id} className={w.wrap}>
                <div className={w.item}>
                    <div>
                        <img className={w.image} src={u.photoURL} />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollow(u.id) }} className={w.btn}>unfollow</button>
                            : <button onClick={() => { props.follow(u.id) }} className={w.btn}>Follow</button>}
                    </div>
                </div>
                <div className={w.items}>
                    <div className={w.leftitems}>
                        <div className={w.name}>{u.name}</div>
                        <div className={w.status}>{u.status}</div>
                    </div>
                    <div className={w.rightitems}>
                        <div className={w.contry}>{u.location.contry}</div>
                         <div className={w.city}>{u.location.city}</div>
                    </div>
                </div>
            </div>)}
            <button>Show More</button>
        </div>
    )






}