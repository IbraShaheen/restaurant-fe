import React from "react";

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
          {" "}
          <p> test1 </p> <h5> lordnfjkld nfmgk jkfgnjfk nfjk nbjfk</h5>
        </div>
        <div>
          {" "}
          <p> test2 </p> <h5> lordnfjkld nfmgk jkfgnjfk nfjk nbjfk</h5>
        </div>
        <div>
          {" "}
          <p> test3 </p> <h5> lordnfjkld nfmgk jkfgnjfk nfjk nbjfk</h5>
        </div>
      </div>
    </div>
  );
};

export default Home;
