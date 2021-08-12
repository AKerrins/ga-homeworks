import React from "react";
import image1 from "../assets/image-one.jpg";
import image2 from "../assets/image-two.jpg";
import image3 from "../assets/image-two.jpg";

const Gallery = () => {
  return (
    <div>
      <div>
        <img src={image1} alt="A mug of coffee" />;
      </div>
      <div>
        <img src={image2} alt="A mug of coffee" />;
      </div>
      <div>
        <img src={image3} alt="A table" />;
      </div>
    </div>
  );
};
export default Gallery;
