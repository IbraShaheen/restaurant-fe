import React from "react";

//image
import about from "./Images/about.jpg";
const About = () => {
  return (
    <div className="about-cont">
      <div className="about-text">
        <h3>Restaurant Name</h3>
        <p>
          From the fresh flavors of Jordan and the Middle East, Pine offers you
          a unique experience where exceptional cuisine meets unrivaled views.
          Located in the Jordanian capital Amman near the queen alia
          international Airport Street, where the art of modern luxury in place.
        </p>
        <p>
          Set on a picturesque view of nature, Tal pine welcomes visitors that
          seek a deﬁnitive dining destination like no other. And with a seating
          area that welcomes up to 850 visitors, with 660 outdoor seats and 190
          indoors, Tal pine meet you overall attention to your requests and
          requirements.
        </p>
        <p>
          Our experience spans over 15 years in Tal Al-Rumman, so we spent
          perfecting our craft in the service industry and positioning Tal pine
          and Tal Al-Rumman as a must visit destination for families, tourists
          and anyone looking for a unique addition to their special moments. By
          building on our success, at Tal Al-Rumman we’ve managed to build a
          family brand name that represents the best in Jordan and sure we
          remain true to a long history of tradition, service and hospitality.
        </p>
       
      </div>

      <img src={about} alt="" width="100%" height="auto" />
    </div>
  );
};

export default About;
