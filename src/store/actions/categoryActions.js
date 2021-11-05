import instance from "./instance";
import { ADD_CATEGORY, DELETE_CATEGORY, FETCH_CATEGORIES } from "./types";


export const addCategory = (newCategory) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/categories", newCategory);
      dispatch({
        type: ADD_CATEGORY,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};


export const fetchCategories = () => {
    return async (dispatch) => {
      try {
        const res = await instance.get("/categories");
        dispatch({
          type: FETCH_CATEGORIES,
          payload: res.data,
        });
      } catch (error) {
        console.log(error.message);
      }
    };
  };


  export const deleteCategory = (categoryId)=>{
    return async(dispatch)=>{
        try {
            await instance.delete(`/categories/${categoryId}`)
            dispatch({
                type:DELETE_CATEGORY,
                payload:{categoryId:categoryId}
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}