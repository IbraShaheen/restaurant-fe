import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addImage, deleteImage } from "../store/actions/gallaryActions";


// icons
import { RiCloseLine } from "@react-icons/all-files/ri/RiCloseLine";
import { BiImageAdd } from "@react-icons/all-files/bi/BiImageAdd";
import { MdDelete } from "@react-icons/all-files/md/MdDelete";

const Gallary = () => {
  const dispatch = useDispatch();
  
  const [show, setShow] = useState(false);
  const [pic, setPic] = useState();
  const [newImage, setNewImage] = useState({
    image: "",
  });
  const images = useSelector((state) => state.images.images);
  const user = useSelector((state) => state.user.user);
  console.log(images);
  
  const [addForm, setAddForm] = useState(false);

  const handleDelete=async(imageId)=>{
    

   await dispatch(deleteImage(imageId))
    setShow(false)
  }
  console.log(show,addForm)
  const imageList = () =>
    images.map((image) => (
      <>
        {user.isAdmin && (
          <div
           
            style={{ position: "absolute", right: "3px" }}
          >
            <abbr title="remove this image">
            <MdDelete style={{zIndex:"20"}} color="orange" size={30} cursor="pointer" onClick={()=>handleDelete(image.id)}  />
           </abbr>
          </div>
        )}
        <img
          className="image-g"
          src={image.image}
          alt=""
          width="100%"
          height="auto"
        />
      </>
    ));

  const handlePic = (event) => {
    console.log(event.target.currentSrc);
    setPic(event.target.currentSrc);
    setShow(true);
  };
  const handleImage = (event) => {
    setNewImage({ ...newImage, image: event.target.files[0] });
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addImage(newImage));
    setAddForm(false);
  };

  return (
    <center>
      <center style={{ backgroundColor: "#e5e5e5" }}>
        <p style={{ display: "inline", fontWeight: "bold", fontSize: "1.7em" }}>

          Gallary
        </p>
        {user.isAdmin && (
          <abbr title="add a new image">
          <BiImageAdd
            size={35}
            color="orange"
            onClick={() => setAddForm(true)}
            cursor="pointer"
          />
          </abbr>
        )}
      </center>
       
      <div className="gallary-cont">
        {!show && !addForm && (
          <div className="gallary-image" onClick={(event) => handlePic(event)}>
            {imageList()}
          </div>
          
        )}
        
        {show && (
          <div className="img-show">
            <div
              onClick={() => setShow(false)}
              style={{ position: "absolute", left: "19.5%" }}
            >
              <RiCloseLine color="white" size={30} />
            </div>
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
        {addForm && (
          <center className="image-form">
            <form onSubmit={handleSubmit}>
              <h3>Add Image</h3>
              <br />
              <input type="file" onChange={handleImage} name="image" required />
              <br />
              <br />
              <button type="submit" className="btn btn-success">
                Add
              </button>
              <button
                className="btn btn-danger"
                onClick={() => setAddForm(false)}
              >
                Cancel
              </button>
            </form>
          </center>
        )}
      </div>
      
    </center>
  );
};

export default Gallary;
