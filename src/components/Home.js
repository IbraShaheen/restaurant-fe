import React from "react";

//Icons
import { GiWheat } from "@react-icons/all-files/gi/GiWheat";
import { HiBadgeCheck } from "@react-icons/all-files/hi/HiBadgeCheck";
import { SiAirtable } from "@react-icons/all-files/si/SiAirtable";
import { SiStaffbase } from "@react-icons/all-files/si/SiStaffbase";

import homeBg from "./Images/home-bg.jpg";
const Home = () => {
  return (
    <div>
      <div className="home-bg-img">
        <div className="welcoming-text">
          <h3>Restaurant Name</h3>
          <p>
            making it look like readable English. Many desktop publishing
            packages and web page editors now use Lorem Ipsum as their default
            model text.
          </p>
        </div>
        <img src={homeBg} alt="" width="100%" height="auto" />
      </div>
      <div className="directions-cont">
        <div>
          <GiWheat size={40} />
          <p>

            <b>
              <i> Fresh Food </i>
            </b>
          </p>
          <h5>

            We give you an experience that is cooking in front of you and as you
            like.
          </h5>
        </div>
        <div>
          <HiBadgeCheck size={40} />
          <p>
            <b>
              <i> Quality Cuisine </i>
            </b>
          </p>
          <h5>

            Our restaurant diverse cuisine will leave you utterly spoilt for
            choice ...............
          </h5>
        </div>
        <div>
          <SiAirtable size={40} />
          <p>
            <b>
              <i> Easy Reservation </i>
            </b>
          </p>
          <h5>
            
            We provide to you online reservation service to give you exceptional
            experience.
          </h5>
        </div>
        <div>
          <SiStaffbase size={40} />
          <p>
            <b>
              <i> Friendly Staff </i>
            </b>
          </p>
          <h5>
            
            We provide to you unique experience with professional staff and they
            are to serve you.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default Home;
