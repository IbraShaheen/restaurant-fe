import React, { useEffect, useState } from "react";

import { MdEmail } from "@react-icons/all-files/md/MdEmail";
import { FcPhoneAndroid } from "@react-icons/all-files/fc/FcPhoneAndroid";
import { MdPerson } from "@react-icons/all-files/md/MdPerson";
import { HiUserGroup } from "@react-icons/all-files/hi/HiUserGroup";
import { useDispatch, useSelector } from "react-redux";

import guide from "./Images/login-guide.png";
import { useHistory } from "react-router";

import { addReservation } from "../store/actions/reservationActions";

const timeOptions = [
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
  "04:30 PM",
  "05:00 PM",
  "05:30 PM",
  "06:00 PM",
  "06:30 PM",
  "07:00 PM",
  "07:30 PM",
  "08:00 PM",
  "08:30 PM",
  "09:00 PM",
  "09:30 PM",
  "10:00 PM",
  "10:30 PM",
  "11:00 PM",
];


const Reservation = () => {
  const user = useSelector(state => state.user.user)
   // console.log(user)
    const reservations = useSelector(state=>state.reservations.reservations)
    //console.log(reservations)
    const userReservations =user? reservations.filter((res)=>res.userId=== user.id):[]
 //   console.log(userReservations)
    const dispatch = useDispatch()
    const history = useHistory()
    
    const today = new Date().toISOString().split("T")[0];
    const days= +new Date().toISOString().slice(8,10)+14
    const maxDate = new Date().toISOString().slice(0,8)+days
    const [reservation, setReservation] = useState({
      name:user?user.username:"" ,
      // name:user.username&&"",
      email:user?user.email:"" ,
      phone:user? user.phone:"" ,
      groupSize:"",
      date:today,
      time:timeOptions[0],
      type:"Families",
      notes:""
    })
   
    const todayRes= reservations.filter(tRes=>tRes.date===reservation.date&& tRes.time===reservation.time)
    console.log(todayRes)
    // useEffect(() => {
    // setReservation({...reservation})
    //  console.log("HIIIIIII")
    // }, [false])    
    const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(addReservation(reservation))
    history.push("/")
  };


  const handleChange = (event) => {
    setReservation({...reservation,[event.target.name]: event.target.value })
  }

  //console.log("res", reservation);


 

  return (<>
    { user ? <div style={{ backgroundColor: "#33333333", height:"670px" }}>
      <h3> Reservation </h3>
      <div className="container">

        <form onSubmit={handleSubmit}>
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto inputs-cont">
              <MdPerson size={25} className="icons" />
              <input
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                required
                onChange={handleChange}
                value={reservation.name}
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto inputs-cont">
              <MdEmail size={25} className="icons" />
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                required
                onChange={handleChange}
                value={reservation.email}
                
              />
            </div>
            <div className="col-8 form-group pt-2 mx-auto inputs-cont">
              <FcPhoneAndroid size={25} className="icons" />
              <input
                type="tel"
                className="form-control"
                placeholder="Phone"
                name="phone"
                required
                onChange={handleChange}
                value={reservation.phone}

              />
            </div>

            <div className="col-8 form-group pt-2 mx-auto inputs-cont">
            <HiUserGroup size={25} className="icons" />
              <input
                type="number"
                className="form-control"
                placeholder="Group Size from 1 to 10"
                name="groupSize"
                required
                min="1"
                max="10"
                onChange={handleChange}
                  ></input>
            </div>


            <div
              className="col-8 form-group pt-2 mx-auto "
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              <div className="col-8">
                <input
                  type="date"
                  className="form-control"
                  placeholder="date"
                  name="date"
                  defaultValue={today}
                  min={today}
                  max={maxDate}
                  required
                onChange={handleChange}

                />
              </div>

              <div className="col-4">
                <select
                  name="time"
                  id="time"
                  onChange={handleChange}
                  style={{ width: "98%", height: "100%" }}
                >
                  {timeOptions.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="col-8 form-group pt-2 mx-auto"
            style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
            &nbsp;&nbsp; <span> <b> Type </b> </span> &nbsp;&nbsp;&nbsp;
            
              <input
                id="Families"
                type="radio"
                name="Type"
                value="Families"
                onChange={(e)=> setReservation({...reservation, type:"Families"})}
                checked={reservation.type==="Families"}
              />
              <label htmlFor="Families"> Families</label>

              &nbsp;&nbsp;
              <input
                id="Guys"
                type="radio"
                name="Type"
                value="Guys"
                onChange={(e)=> setReservation({...reservation, type:"Guys"})}
                checked={reservation.type==="Guys"}
              />
               <label htmlFor="Guys"> Guys (males)</label>

            </div>


            <div className="col-8 form-group pt-2 mx-auto">
              <textarea
                className="form-control"
                id=""
                cols="15"
                rows="2"
                placeholder="Have any notes?"
                name="notes"
                onChange={handleChange}

              ></textarea>
            </div>

            <center>
              <div className="col-8 pt-3 mx-auto">
                {userReservations.some(res=>res.date===reservation.date)?
                <>
                <button disabled className=" col-8 btn btn-danger">
                  <b>You already have a reservation in {reservation.date}</b>
                </button>
                </>
                :todayRes.length===15?
                <button disabled className=" col-8 btn btn-warning">
                <b>fully reserved at {reservation.time}</b>
              </button>
                :
                <button type="submit" className=" col-4 btn btn-dark">
                  <b>SEND</b>
                </button>
                }
              </div>
            </center>
          </div>
        </form>
        <br />
      </div>
    </div>
    : 
    <div style={{ backgroundColor: "#f7f7f7", height:"670px" }}>
      <center><br/><br/>
        <h3>You have to be loged in</h3>
        <button className="btn btn-success" onClick={()=> history.push("/signin")}>Login</button><br/><br/>
        <div style={{height:"515px", overflow:"hidden"}}>
         <img src={guide} alt="guide" width="50%" height="100%" ></img>
         </div>
      </center>
    </div> }
  </>);
};

export default Reservation;
