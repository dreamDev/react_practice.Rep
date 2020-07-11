import React from 'react';
import MyPostsContainer from '../MyPostsContainer/MyPostsContainer';
import ProfileInfo from '../ProfileInfo/ProfileInfo';

const Profile = () => {
  return (
    <div className="profile">
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  )
}

export default Profile