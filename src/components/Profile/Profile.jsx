import React from 'react';
import MyPosts from '../MyPosts/MyPosts'
import ProfileInfo from '../ProfileInfo/ProfileInfo'

const Profile = ({ state, dispatch }) => {
  return (
    <div className="profile">
      <ProfileInfo />
      <MyPosts profilePage={state.profilePage} dispatch={dispatch}/>
    </div>
  )
}

export default Profile