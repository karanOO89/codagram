import PostBox from "./postBox";

const PostContainer = (props) => {
  // const [singlePost, setSinglePost] = useState({})
  // props.postData.map(post => {
  //   console.log(post)
  //   setSinglePost({...post})

  // })
  return (
    <div>      
      
        <PostBox postData ={props.postData}/>

    </div>
  )
}

export default PostContainer;