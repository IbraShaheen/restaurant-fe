import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { updateDish } from '../../store/actions/dishActions';

const DishEdit = ({dishInfo,open,setOpen}) => {

    const dispatch = useDispatch()
// console.log(dishInfo)
const [updatedDish,setUpdatedDish]=useState({
    name:dishInfo.name,
    price:dishInfo.price,
    image:dishInfo.image,
    
})
// console.log(updatedDish)

const handleChange = (event) => {
    setUpdatedDish({ ...updatedDish, [event.target.name]: event.target.value });
  };

  const handleImage = (event) => {
    setUpdatedDish({ ...updatedDish, [event.target.name]: event.target.files[0] });
  };
const handleSubmit=(event)=>{
    event.preventDefault();
    setOpen(false);
    dispatch(updateDish(updatedDish,dishInfo.id))
}
    return (
        <div>
             {open && 
        <center className="category-form">
          <form onSubmit={handleSubmit}>
            <h3>EDit Dish</h3>
            <br />
            <input
              type="text"
              name="name"
              placeholder="Dish Name"
              required
              value={updatedDish.name}
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
              value={updatedDish.price}
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
            <button className="btn btn-danger" onClick={() => setOpen(false)}>
              Cancel
            </button>
          </form>
        </center>
    }
        </div>
    )
}

export default DishEdit
