import instance from "./instance";
import { ADD_RESERVATION } from "./types";


export const addReservation = (newReservation) => {
  return async (dispatch) => {
    try {
      const res = await instance.post("/reservations", newReservation);
      console.log("res",res.data)
      
      dispatch({
        type: ADD_RESERVATION,
        payload: res.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};