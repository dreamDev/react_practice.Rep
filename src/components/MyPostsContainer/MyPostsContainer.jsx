import MyPosts from '../MyPosts/MyPosts';
import { addPostAC, textareaPostChangeAC } from '../../redux/profileReducer';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    profilePage: state.profilePage
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addPost: () => dispatch(addPostAC()),
    textChange: value => dispatch(textareaPostChangeAC(value))
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer