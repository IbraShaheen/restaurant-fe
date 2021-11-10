import React, { useState } from "react";
import { addDish, deleteDish } from "../../store/actions/dishActions";
import { useDispatch, useSelector } from "react-redux";

//icons
import { MdAddCircle } from "@react-icons/all-files/md/MdAddCircle";
import { MdDeleteSweep } from "@react-icons/all-files/md/MdDeleteSweep";
// import {MdEdit} from "@react-icons/all-files/md/MdEdit"
import {GrFormEdit} from "@react-icons/all-files/gr/GrFormEdit"
import DishEdit from "./DishEdit";

const DishesList = ({ catInfo }) => {
  console.log(catInfo)
  const dispatch = useDispatch();
  const dishes = useSelector((state) => state.dishes.dishes);
  const [show, setShow] = useState(false);
  const [editForm, setEditForm]=useState(false)
  const [dishInfo,setDishInfo]=useState()
  const [dish, setDish] = useState({
    name: "",
    image: "",
    price: "",
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
              <MdDeleteSweep
                className="delete-dish-icon"
                size={25}
                onClick={() => dispatch(deleteDish(dish.id))}
              />
              <GrFormEdit size={25} className="edit-dish-icon" onClick={()=>handleEdit(dish)} />
              <h5 className="card-title">{dish.name}</h5>
              <p className="card-text"> JOD {dish.price}</p>
            </div>
          </div>
        </div>
      </div>
    ));
const handleEdit=(dishInfo)=>{
  setEditForm(true);
  setDishInfo(dishInfo)
}
  const handleChange = (event) => {
    setDish({ ...dish, [event.target.name]: event.target.value });
  };

  const handleImage = (event) => {
    setDish({ ...dish, [event.target.name]: event.target.files[0] });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addDish(dish, catInfo.id));
    setShow(false);
  };
  console.log(dish);
  return (
    <>
      {!show && (
        <div>
          <MdAddCircle
            size={30}
            color="orange"
            cursor="pointer"
            onClick={() => setShow(true)}
          />

          {dishesList}
        </div>
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
      { editForm && 
        <DishEdit dishInfo={dishInfo} open={editForm} setOpen={setEditForm}/>
      }
    </>
  );
};

export default DishesList;
