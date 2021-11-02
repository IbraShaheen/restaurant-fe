import React, { useState } from "react";
import images from "../imageData";


import { RiCloseLine } from "@react-icons/all-files/ri/RiCloseLine";
import { BiImageAdd } from "@react-icons/all-files/bi/BiImageAdd";







const Gallary = () => {
  const [show, setShow] = useState(false);
  const [pic, setPic] = useState();

  const [addForm, setAddForm] = useState()

  const imageList = () =>
    images.map((image) => (
      <img className="image-g" src={image} alt="" width="100%" height="auto" />
    ));

  const handlePic = (event) => {
    console.log(event.target.currentSrc);
    setPic(event.target.currentSrc);
    setShow(true);
  };

  return (
    <>
    <center style={{backgroundColor:"#e5e5e5"}}>
    <p style={{display:"inline", fontWeight:"bold", fontSize:"1.7em"}}> Gallary </p>
    <BiImageAdd size={35} color="orange" onClick={()=>{} }/>
    </center>

    <div className="gallary-cont">
      
      {!show && (
        <div className="gallary-image" onClick={(event) => handlePic(event)}>
          {imageList()}
        </div>
      )}
      {show && (
        <div className="img-show">
           <div onClick={() => setShow(false)} style={{position:"absolute", left:"19.5%"}}><RiCloseLine color="white" size={30} /></div>
          <img
            src={pic}
            alt=""
            width="61%"
            height="auto"
            style={{
              boxShadow: "15px 15px 1000px black",
              border: "white solid 3px",
            }}
          />
         
        </div>
      )}
    </div>
    </>
  );
};

export default Gallary;
