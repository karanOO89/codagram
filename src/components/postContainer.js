import PostBox from "./postBox";

const PostContainer = (props) => {

  return (
    <div>      
      
        <PostBox postData ={props.postData}/>

    </div>
  )
}

export default PostContainer;