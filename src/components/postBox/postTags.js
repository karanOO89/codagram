import "./postTags.scss"

const style = {
  color: '#2196f3',
  // boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
};

const PostTags = (props) => {
//   console.log("tagss", props.tags);
  return (
    <div className="postTags">
      <div style={style}>
        {props.tags && Array.isArray(JSON.parse(props.tags))
          ? JSON.parse(props.tags).map((item, index) => {
              return <div key={index}>{"#"+item} </div>;
            })
          : props.tags ? "#"+JSON.parse(props.tags) : ""}
      </div>
    </div>
  );
};

export default PostTags;
