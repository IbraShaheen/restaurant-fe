import { DELETE_IMAGE, FETCH_IMAGES, IMAGE_ADD } from "../actions/types"

const initialState={
    images:[],
    loading:true
}

const gallaryReducer = (state= initialState, action) => {
    switch(action.type){
        case IMAGE_ADD:
            return{
                ...state,
                images:[...state.images, action.payload]
            }
            case FETCH_IMAGES:
                return {
                    ...state,
                    images:action.payload,
                    loading:false
                }
                case DELETE_IMAGE:
                    const imageToKeep = state.images.filter(
                        (image) => image.id !== action.payload.imageId
                      );
                    return{
                        ...state,
                        images: imageToKeep
                    }
        default:
            return state
    }
  
}

export default gallaryReducer
