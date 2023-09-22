import React from 'react';
import Webcam from "react-webcam";
import Aim from "../../../assets/CameraPage/Aim.svg";
import Shot from "../../../assets/CameraPage/Shot.svg";
import '../../../styles/components/CameraPage/Camera.scss'
import Heart from "../../../assets/CameraPage/heart.svg";
import ServerModal from '../MainPage/ServerModal';

const MainCamera = ({navigate, webcamRef, capturePhoto, captures, showServerModal}) => {
    
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
                    ref={webcamRef}
                    className='Camera_Layout'
                />
                <img src={Aim} alt='aim' className='Camera_Aim' />
                <img src={Heart} alt='Heart' className='Camera_Heart' onClick={()=>navigate('/')}/>
                <img src={Shot} alt='Shot' className='Camera_Shot' onClick={capturePhoto}/>
            </div>
            {showServerModal && <ServerModal />}
        </div>
    );
};

export default MainCamera;