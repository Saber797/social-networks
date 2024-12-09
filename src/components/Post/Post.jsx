import React from "react";
import s from './Post.module.css'

export const Post = (props) => {
 
 
      return <div className = {s.item} >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Dh-hCRQx8d2VZzrmMMLcpUhAh53KlS1s5A&s" alt=""  className= {s.vasya} />
        <p>{props.message}</p>
        <div>
        like  <span className= {s.like}>{props.likescount}</span>
        </div>

  
    </div>
}
