import React from "react";
import { MyPosts } from "./MyPosts";
import { addPostActionCreator, updateNewPostActionCreator } from '../reducerPost'
import { connect } from "react-redux";

let mapStateToProps = (state)=>{
    return {
         posts: state.profilePage.profilePage.posts,
         newPostText: state.profilePage.profilePage.newPostText
    }
 }
 let mapDispatchToProps = (dispatch)=>{
    return {
        addnewPost:()=>{
            dispatch(addPostActionCreator())
        },
        onPostChange:(text)=>{
            dispatch(updateNewPostActionCreator(text))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps,mapDispatchToProps)(MyPosts)

export default MyPostsContainer;
