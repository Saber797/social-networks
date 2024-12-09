import React from 'react';
import MyPostsContainer from '../MyPosts/MyPostContainer';
import s from './Content.module.css'
import { ProfileInfo } from '../Profile/ProfileInfo';
export const Profile = (props) => {
  
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer />
    
    </div>
  )
  
  
  
  
}
