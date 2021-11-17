import instance from "./instance";
import { ADD_RESERVATION, FETCH_RESERVATIONS } from "./types";


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

export const fetchReservations = ()=>{
  return async(dispatch)=>{
    try {
      const res = await instance.get("/reservations")
      dispatch({
        type:FETCH_RESERVATIONS,
        payload: res.data
      })
    } catch (error) {
      console.log(error.message)
    }
  }
}