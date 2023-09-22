import React from 'react';
import { useNavigate } from 'react-router-dom';
import MainCamera from '../../presentation/MainPage/MainCamera';

const MainCameraContainer = () => {
    const navigate = useNavigate();

    return (
        <MainCamera navigate={navigate}/>
    );
};

export default MainCameraContainer;