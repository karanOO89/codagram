import React ,{Fragment} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./postImage.scss"
const PostImage = (props) => {
  const settings = {
    // dots: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // width: 100,
    dots: true,
    // fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    // centerMode: true,
    focusOnSelect: true
    
    
    
    // className: "slides",
  };
  const newImageArray = [];
  // if(props.imageArray && Array.isArray(JSON.parse(props.imageArray)){
  if (props.imageArray && Array.isArray(JSON.parse(props.imageArray))) {
    JSON.parse(props.imageArray).map((image) => {
      newImageArray.push({
        name: image,
        url: `http://localhost:8080/uploads/${image}`,
      });
    });
  }
  else{
    newImageArray.push({
      name: props.imageArray,
      url: `http://localhost:8080/uploads/${props.imageArray}`,
    });
  
  }

  
  return (
    // <div className="postImage">
    <div className="postImage" >
      <Slider {...settings}>
        {newImageArray.map((photo) => {
          return (
            <div>
              <img width="100%" height="500px"src={photo.url} />
            </div>
          );
        })}
      </Slider>
      {/* {props.imageArray && Array.isArray(JSON.parse(props.imageArray)) ? (
        JSON.parse(props.imageArray).map((item, index) => {
          return (
            <div key={index}>
              <img
                width="250px"
                src={`http://localhost:8080/uploads/${item}`}
              />
            </div>
          );
        })
      ) : props.imageArray ? (
        <img
          src={`http://localhost:8080/uploads/${JSON.parse(props.imageArray)}`}
        />
      ) : (
        ""
      )} */}
    </div>
  );
};

export default PostImage;
