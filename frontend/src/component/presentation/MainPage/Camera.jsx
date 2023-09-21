import React from 'react';
import Webcam from "react-webcam";
import '../../../styles/components/MainPage/Camera.scss'

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
            </div>
        </div>
    );
};

export default Camera;