import React from 'react';
import { useNavigate } from 'react-router-dom';
import StartRendering from '../../presentation/common/StartRendering';

const StartRenderingContainer = () => {
    const navigate = useNavigate();
    const onBtnClick = () => {
        navigate('/camera')
    }
    return (
        <StartRendering onBtnClick={onBtnClick} />
    );
};

export default StartRenderingContainer;