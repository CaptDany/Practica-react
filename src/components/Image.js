import React, { useState } from "react";

function Image() {
  const imageArray = [
    "https://distritt.com/wp-content/uploads/2022/06/karely-ruiz-819x1024.jpg",
    "https://th.bing.com/th/id/R.79309b751fc01736ea1cc3d786b25651?rik=rurHNX620eLm%2fA&pid=ImgRaw&r=0",
    "https://th.bing.com/th/id/OIF.FbKtnUXYzt2qMN1YnVi4ww?rs=1&pid=ImgDetMainhthttps://preview.redd.it/i0ibesv1o5d41.jpg?auto=webp&s=6949ba84588a0e107b8eb6e019ffd9f37b3a0f09tps://www.debate.com.mx/__export/1679963645746/sites/debate/img/2023/03/27/wendy-guevara_x2x.png_903948830.png",
    "https://preview.redd.it/live-action-shrek-v0-4kek1xioee891.jpg?width=1080&crop=smart&auto=webp&s=0c0553cd776c17ffa92042aa0aa7b975456452eb",
    "https://i.redd.it/l1dvly9cr8k41.jpg",
  ];

  const [imageUrl, setImageUrl] = useState(imageArray[0]);

  const changeImage = () => {
    const randomImage =
      imageArray[Math.floor(Math.random() * imageArray.length)];
    setImageUrl(randomImage);
  };

  return (
    <div onClick={changeImage}>
      <img src={imageUrl} alt="Random" />
    </div>
  );
}

export default Image;
