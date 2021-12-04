import React from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

import {MdEmail} from "@react-icons/all-files/md/MdEmail"
import {FcPhoneAndroid} from "@react-icons/all-files/fc/FcPhoneAndroid"
import {MdSubject} from "@react-icons/all-files/md/MdSubject"
import {MdPerson} from "@react-icons/all-files/md/MdPerson"
const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();
    
    emailjs
      .sendForm(
        "service_ugaw1h4",
        "template_6ilbghb",
        e.target,
        "user_tGf43AVvseJMTwqIUMrMs"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      Swal.fire({
        icon: 'success',
        title: 'Message sent!',
        showConfirmButton: false,
        timer: 1500
      })
    e.target.reset();
  }
  return (
    <div style={{backgroundColor:"#33333333"}}>
      <div className="container">
        <form onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto inputs-cont">
               
    <MdPerson size={25} className="icons" />
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                required
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto inputs-cont">
                <MdEmail size={25} className="icons"/>
              <input
              
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                required
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto inputs-cont">
            <FcPhoneAndroid size={25} className="icons"/>
              <input
                type="tel"
                className="form-control"
                placeholder="Phone"
                name="phone"
                required
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto inputs-cont">
                <MdSubject size={25} className="icons"/>
              <input
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
                required
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
              <textarea
                className="form-control"
                id=""
                cols="30"
                rows="8"
                placeholder="Your message"
                name="message"
                required
              ></textarea>
            </div>
            <center>
            <div className="col-8 pt-3 mx-auto">
              <button
                type="submit"
                className=" col-5 btn btn-dark"
                
              >
                  <b>SEND</b>
              </button>
            </div>
            </center>
          </div>
        </form><br/>
        {/* location */}

        <div className="location-cont">
            <iframe title="location"
              src="https://maps.google.com/maps?q=King%20Hssein%20Business%20Park%20Auditorium&t=&z=17&ie=UTF8&iwloc=&output=embed"

              width="100%"
            //   width="600px"
              height="500px"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
            ></iframe>
          </div>
      </div>

    </div>
  );
};

export default Contact;
