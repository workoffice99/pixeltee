import React from "react";

export default function Video() {
  return (
    <div className="container bg-dark p-5" height="400px">
      <div className="row m-6">
        <iframe
          width="1349"
          height="488"
          src="https://www.youtube-nocookie.com/embed/5F_7rHZ7Xzc"
          frameborder="0"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}
