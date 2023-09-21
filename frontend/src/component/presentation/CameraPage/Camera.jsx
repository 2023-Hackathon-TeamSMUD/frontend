import React from 'react';
import Webcam from "react-webcam";
import Aim from "../../../assets/CameraPage/Aim.svg";
import Heart from "../../../assets/CameraPage/heart.svg";
import Storage from "../../../assets/CameraPage/Storage.svg";
import Shot from "../../../assets/CameraPage/Shot.svg";
import '../../../styles/components/CameraPage/Camera.scss'

const Camera = () => {
    return (
        <div className='Camera_Container'>
            <div className='Camera_Wrapper'>
                <Webcam
                    audio={false}
                    screenshotFormat="image/jpeg"
                    videoConstraints = {{
                        facingMode: "environment",
                        focusMode: "continuous"
                    }}
                    className='Camera_Layout'
                />
                <img src={Aim} alt='aim' className='Camera_Aim' />
                <img src={Heart} alt='Heart' className='Camera_Heart' />
                <img src={Storage} alt='Storage' className='Camera_Storage' />
                <img src={Shot} alt='Shot' className='Camera_Shot' />
            </div>
        </div>
    );
};

export default Camera;