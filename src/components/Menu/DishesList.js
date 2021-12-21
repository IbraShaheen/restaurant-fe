import React, { useState } from "react";
import { addDish, deleteDish } from "../../store/actions/dishActions";
import { useDispatch, useSelector } from "react-redux";

//icons

import { MdDeleteSweep } from "@react-icons/all-files/md/MdDeleteSweep";
// import {MdEdit} from "@react-icons/all-files/md/MdEdit"
import { GrFormEdit } from "@react-icons/all-files/gr/GrFormEdit";
import DishEdit from "./DishEdit";

const DishesList = ({ catInfo, user }) => {
  console.log(catInfo);
  const dispatch = useDispatch();
  const dishes = useSelector((state) => state.dishes.dishes);
  const [show, setShow] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [dishInfo, setDishInfo] = useState();

  const [dish, setDish] = useState({
    name: "",
    price: "",
    image: "https://i.ibb.co/D1b8WgJ/dishLogo.png",
  });

  const dishesList = dishes
    .filter((dish) => dish.categoryId === catInfo.id)
    .map((dish) => (
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src={dish.image} className="card-img" alt={dish.name} />
          </div>
          <div className="col-md-8">
            <div className="card-body cont-icon">
              {user && user.isAdmin && (
                <>
                  <abbr title="Remove This Dish">
                    <MdDeleteSweep
                      className="delete-dish-icon"
                      size={25}
                      onClick={() => dispatch(deleteDish(dish.id))}
                      cursor="pointer"
                      color="red"
                    />
                  </abbr>

                  <abbr title="Edit This Dish">
                  <GrFormEdit
                    color="#e85b04ee"
                    size={25}
                    className="edit-dish-icon"
                    onClick={() => handleEdit(dish)}
                    cursor="pointer"
                    />
                    </abbr>
                </>
              )}
              <h5 className="card-title">{dish.name}</h5>
              <p className="card-text"> JOD {dish.price}</p>
            </div>
          </div>
        </div>
      </div>
    ));
  const handleEdit = (dishInfo) => {
    setEditForm(true);
    setDishInfo(dishInfo);
  };
  const handleChange = (event) => {
    setDish({ ...dish, [event.target.name]: event.target.value });
  };

  const handleImage = (event) => {
    setDish({ ...dish, [event.target.name]: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addDish(dish, catInfo.id));
    setShow(false)
    setDish({
      name: "",
      price: "",
      image: "https://i.ibb.co/D1b8WgJ/dishLogo.png",
    })
  };
  console.log(catInfo);
  return (
    <>
      {!show && (
        <>
        <h4>{catInfo.name}</h4>
          {user && user.isAdmin && (

            <button
              className="btn btn-success"
              onClick={() => setShow(true)}
              style={{
                fontWeight: "bold",
                textTransform: "uppercase",
                margin: "15px 0px",
              }}
            >
              Add Dish
            </button>
          )}
          <div className="dishes-cont"
           style={{
             marginTop: user&&user.isAdmin?"0px":"70px"
           }} >
            {dishesList}
            </div>
        </>
      )}
      {show && (
        <center className="category-form">
          <form onSubmit={handleSubmit}>
            <h3>Add Dish</h3>
            <br />
            <input
              type="text"
              name="name"
              placeholder="Dish Name"
              required
              onChange={handleChange}
            />
            <br />
            <br />

            <input
              type="number"
              name="price"
              placeholder="Dish Price"
              required
              min={1}
              onChange={handleChange}
            />
            <br />
            <br />

            <input
              type="file"
              name="image"
              placeholder="Dish Image"
              onChange={handleImage}
            />
            <br />
            <br />
            <button type="submit" className="btn btn-success">
              Add
            </button>
            <button className="btn btn-danger" onClick={() => setShow(false)}>
              Cancel
            </button>
          </form>
        </center>
      )}
      {editForm && (
        <DishEdit dishInfo={dishInfo} open={editForm} setOpen={setEditForm} />
      )}
    </>
  );
};

export default DishesList;
