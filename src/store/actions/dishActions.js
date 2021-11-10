import { fetchCategories } from "./categoryActions";
import instance from "./instance";
import { ADD_DISH, DELETE_DISH, EDIT_DISH, FETCH_DISHES } from "./types";


export const addDish=(dish,categoryId)=>{
    return async (dispatch)=>{
        const formData = new FormData();
        for (const key in dish) formData.append(key, dish[key]);
        try {
            const res = await instance.post(`/categories/${categoryId}/dishes`, formData)
            dispatch({
                type: ADD_DISH,
                payload: res.data
            })
            dispatch(fetchCategories())
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const fetchDishes=()=>{
    return async(dispatch)=>{
    try {
        const res=await instance.get("/dishes")
        dispatch({
            type:FETCH_DISHES,
            payload:res.data
        })

    } catch (error) {
        console.log(error.message)
    }        
    }
}


export const deleteDish=(dishId)=>{
    return async(dispatch)=>{
        try {
            await instance.delete(`/dishes/${dishId}`)
            dispatch({
                type:DELETE_DISH,
                payload:{dishId:dishId}
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const updateDish=(updatedDish,dishId)=>{
    return async(dispatch)=>{
        const formData = new FormData();
        for (const key in updatedDish) formData.append(key, updatedDish[key]);
        try {
             await instance.put(`dishes/${dishId}`,formData)
           await dispatch({
                type:EDIT_DISH,
                payload:{updatedDish:updatedDish}
            })
            dispatch(fetchDishes())
        } catch (error) {
            console.log(error.message)
        }
    }
}