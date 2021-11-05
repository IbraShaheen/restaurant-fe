import React, { useState } from "react";

import { MdAddCircle } from "@react-icons/all-files/md/MdAddCircle";
import { MdRemoveCircleOutline } from "@react-icons/all-files/md/MdRemoveCircleOutline";

import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  deleteCategory,
} from "../../store/actions/categoryActions";

const MenuList = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState();

  const categories = useSelector((state) => state.categories.categories);

  const categoriesList = categories.map((cat) => (
    <div style={{ minWidth: "33.33%", textAlign: "center" }}>
      <MdRemoveCircleOutline
        size={22}
        cursor="pointer"
        onClick={() => dispatch(deleteCategory(cat.id))}
      />
      &nbsp;
      {cat.name}
    </div>
  ));

  const handleCategory = (event) => {
    setCategory({ [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(addCategory(category));
    setShow(false);
  };

  return (
    <center style={{ height: "670px" }}>
      <center>
        <p style={{ fontWeight: "bold", fontSize: "1.7em", display: "inline" }}>
          Menu List
        </p>
        <MdAddCircle
          size={30}
          color="orange"
          cursor="pointer"
          onClick={() => setShow(true)}
        />
      </center>

      {!show && (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "center",
            backgroundColor: "tomato",
            width: "60%",
            margin: "auto",
          }}
        >
          {categoriesList}
          <br />
        </div>
      )}

      {show && (
        <center className="category-form">
          <form onSubmit={handleSubmit}>
            <h3>Add Category</h3>
            <br />
            <input
              type="text"
              name="name"
              placeholder="Category Name"
              required
              onChange={handleCategory}
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
    </center>
  );
};

export default MenuList;
