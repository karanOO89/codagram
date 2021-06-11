import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const PostImage = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    width: 100,
    // dots: true,
    // fade: true,
    // infinite: true,
    // speed: 500,
    // slidesToShow: 1,
    // slidesToScroll: 1,
    // arrows: true,
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
  
    newImageArray.push({
      name: props.imageArray,
      url: `http://localhost:8080/uploads/${props.imageArray}`,
    });
  


  
  return (
    <div style={{ width: "100%" }}>
      <Slider {...settings}>
        {newImageArray.map((photo) => {
          return (
            <div>
              <img width="50%" src={photo.url} />
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
