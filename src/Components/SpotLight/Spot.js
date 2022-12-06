import React from "react";
import Img1 from "./../../Assets/spot1.png";
import Img2 from "./../../Assets/spot2.png";
import Img3 from "./../../Assets/spot3.png";

export default function Spot() {
  return (
    <div className="container">
      <div className="row">
        <p className="fs-1 fw-bold text-center">ALIEN SPOTLIGHT</p>
        <p className="fs-5 text-center">
          Here you will find a selection of the best upcoming female artists in
          the NFT space. Read more about their process, inspirations and what
          makes them special.
        </p>
      </div>
      <div className="row ">
        <div className="col-12 col-md-4 text-center mt-3 ">
          <img src={Img1} />
          <p className=" text-center mt-3 fw-bold ">Thunder</p>
        </div>
        <div className="col-12 col-md-4 text-center mt-3 ">
          <img src={Img2} />
          <p className=" mt-3 fw-bold">Trever Woolf</p>
        </div>
        <div className="col-12 col-md-4 text-center mt-3 ">
          <img src={Img3} />
          <p className="4 text-center mt-3 fw-bold">Samuel</p>
        </div>
      </div>
    </div>
  );
}
