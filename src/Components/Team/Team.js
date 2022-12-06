import React from "react";
import Team1 from "./../../Assets/Team1.png";
import Team2 from "./../../Assets/Team2.png";
import Twitter from "./../../Assets/Twitter.png";

export default function Team() {
  return (
    <div className="container">
      <div className="row flex-column-reverse flex-lg-row">
        <div className="col-12 col-lg-7">
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="px-3 py-4" Style="background-color:#D9D9D9">
                <div Style="height:360px; overflow:hidden;">
                  <img src={Team1} width="100%" height="auto" />
                </div>
                <div className="d-flex justify-content-between bg-white border-dark border border-dark p-2">
                  <div>
                    <div>Artist /BadaasAlien</div>
                    <div className="fw-bold">Sidhu Basho</div>
                  </div>
                  <div>
                    <img src={Twitter} width="25px" height="auto" />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6">
              <div
                className="px-3 py-4 mt-4 mt-md-0 "
                Style="background-color:#D9D9D9"
              >
                <div Style="height:360px; overflow:hidden;">
                  <img src={Team2} width="100%" height="auto" />
                </div>
                <div className="d-flex justify-content-between bg-white border-dark border border-dark p-2">
                  <div>
                    <div>Developer /BadaasAlien</div>
                    <div className="fw-bold">Yasas Wick</div>
                  </div>
                  <div>
                    <img src={Twitter} width="25px" height="auto" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-5 text-center text-lg-start">
          <p className="fs-1 fw-bold">THE TEAM</p>
          <p className="fs-5">
            We are a team passionate about social equality and we hope to do our
            part through our Alien Society project.
          </p>
          <p className="fs-5">
            Sidhu and Yasas have a background in design and project management
            respectively and are assisted by an awesome team in our Discord
            server.
          </p>
        </div>
      </div>
    </div>
  );
}
