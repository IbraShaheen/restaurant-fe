import React, { useState } from "react";

import { MdRemoveCircleOutline } from "@react-icons/all-files/md/MdRemoveCircleOutline";

import { useDispatch, useSelector } from "react-redux";
import {
  addCategory,
  deleteCategory,
} from "../../store/actions/categoryActions";
import DishesList from "./DishesList";
import { Spinner } from "react-bootstrap";

const MenuList = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [category, setCategory] = useState();
  const [showList, setShowList] = useState(false);
  const [catInfo, setCatInfo] = useState();

  const categories = useSelector((state) => state.categories.categories);
  const categoriesLoading = useSelector((state) => state.categories.loading);
  const user = useSelector((state) => state.user.user);

  console.log("test", categories);

  const handleShowList = (cat) => {
    setShowList(true);
    setCatInfo(cat);
  };
  if (categoriesLoading) return <Spinner />;
  const categoriesList = categories.map((cat) => (
    <div className="cat-item btn">
      {user &&
        user.isAdmin &&
        ((cat.dishes && cat.dishes.length === 0) || !cat.dishes) && (
          <abbr title="Remove This Category">
            <MdRemoveCircleOutline
              size={22}
              cursor="pointer"
              onClick={() => dispatch(deleteCategory(cat.id))}
              color="red"
            />
          </abbr>
        )}
      &nbsp;
      <button
        className="cat-btn btn btn-outline-dark"
        style={{ cursor: "pointer" }}
        onClick={() => handleShowList(cat)}
      >
        {" "}
        {cat.name}
      </button>
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
    <center
      style={{
        minHeight: "670px",
      
        background: "linear-gradient(0.25turn, #3f87a6, #ebf8e1, #f69d3c)",
      }}
    >
      <center>
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
            Add Category
          </button>
        )}
      </center>

      {!show && (
        <>
          <div
            style={{
              paddingTop: user && user.isAdmin ? "0px" : "38px",
            }}
            className="cat-cont"
          >
            {categoriesList}
            <br />
          </div>
          <hr style={{ width: "35%" }} />
          {showList && <DishesList catInfo={catInfo} user={user} />}
        </>
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
