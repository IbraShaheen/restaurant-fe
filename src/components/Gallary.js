import React from 'react'
import images from "../imageData"
const Gallary = () => {
    const imageList = ()=> images.map(image=>(<img className="image-g" src={image} alt="" width="100%" height="auto"/>))
    
    return (
        <div className="gallary-cont" >
            <div className="gallary-image" >
                {/* <img src="" alt="" /> */}
                {imageList()}
            </div>
        </div>
    )
}

export default Gallary
