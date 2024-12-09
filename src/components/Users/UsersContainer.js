import React from "react";
import { Users } from "./Users";
import { connect } from "react-redux";
import { FollowAC, setUsersAC, UnFollowAC } from "../reducerUsers";

let mapStateToProps = (state)=>{
    return {
        users: state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch)=>{
    return {
        follow: (userid)=>{
            dispatch(FollowAC(userid))
        },
        unfollow: (userid)=>{
            dispatch(UnFollowAC(userid))
        },
        setUsers: (users) =>{
            dispatch(setUsersAC(users))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Users)