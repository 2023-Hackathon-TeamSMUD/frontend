import React, {useState} from 'react';
import CameraPage from '../../../pages/CameraPage';

const CameraPageContainer = () => {
    const [isOpen, setIsOpen] = useState([true, false]);
    return (
        <CameraPage
            isOpen={isOpen}
            setIsOpen={setIsOpen}
        />
    );
};

export default CameraPageContainer;