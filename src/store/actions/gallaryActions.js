import instance from "./instance";
import { DELETE_IMAGE, FETCH_IMAGES, IMAGE_ADD } from "./types";


export const addImage=(image)=>{
    return async (dispatch)=>{
        const formData = new FormData();
        for (const key in image) formData.append(key, image[key]);
        try {
            const res = await instance.post("/images", formData)
            dispatch({
                type: IMAGE_ADD,
                payload: res.data
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const fetchImages = ()=>{
    return async(dispatch)=>{
        try {
            const res= await instance.get("/images")
            dispatch({
                type: FETCH_IMAGES,
                payload:res.data
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}

export const deleteImage = (imageId)=>{
    return async(dispatch)=>{
        try {
            await instance.delete(`/images/${imageId}`)
            dispatch({
                type:DELETE_IMAGE,
                payload:{imageId:imageId}
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}