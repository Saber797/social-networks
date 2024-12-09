import React from "react";
import s from './MyPosts.module.css'
import { Post } from "../Post/Post";



export const MyPosts = (props) => {
    console.log(props);
    
    let postsElement = props.posts.map(p => <Post message={p.messages} id={p.id} likescount={p.likescount} />)

    let addnewPost = () => {
        props.addnewPost()        
    }

    let onPostChange = (e) =>{
        let text = e.target.value 
        props.onPostChange(text)  
    }

    return <div>
        <div className={s.item}>
            My post
            <textarea onChange={onPostChange}                
                value={props.newPostText} />
            <button onClick={addnewPost}>Add Post</button>
        </div>
        {postsElement}
    </div>


}


