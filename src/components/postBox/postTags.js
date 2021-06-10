const PostTags = (props) => {
//   console.log("tagss", props.tags);
  return (
    <div className="postTags">
      <div>
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
