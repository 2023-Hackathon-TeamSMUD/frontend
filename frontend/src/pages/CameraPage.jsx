import React, {useState} from 'react';
import Camera from '../component/presentation/CameraPage/Camera';
import CameraInformation1 from '../component/presentation/CameraPage/CameraInformation1';
import CameraInformation2 from '../component/presentation/CameraPage/CameraInformation2';

const CameraPage = () => {
    const [isOpen, setIsOpen] = useState([true, false]);

    return (
        <>
            {console.log(isOpen[0], isOpen[1])}
            {isOpen[0] && <CameraInformation1 isOpen={isOpen} setIsOpen={setIsOpen}/>}
            {isOpen[1] && <CameraInformation2 isOpen={isOpen} setIsOpen={setIsOpen}/>}
            <Camera />
        </>
    );
};

export default CameraPage;