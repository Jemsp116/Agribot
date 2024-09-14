import React, { useState } from 'react';

const RobotImage = ({ images }) => {
  const [activeImage, setActiveImage] = useState(images?.[0]);

  return (
    <>
      <div className="flex justify-center items-center">
        <img src={activeImage} alt="product-image" className="w-full h-72 object-contain" />
      </div>
      <div className="flex gap-2 mt-2">
        {images.map((image) => (
          <div
            key={image}
            className={`border-2 p-1 cursor-pointer rounded ${image === activeImage ? 'border-red-500' : 'border-gray-400'}`}
            onClick={() => setActiveImage(image)}
          >
            <img src={image} alt="product-images" className="w-full h-20 object-contain" />
          </div>
        ))}
      </div>
    </>
  );
}

export default RobotImage;