import React from 'react';
import { useNavigate } from 'react-router-dom';
import Back from '../../../assets/MainPage/Back.svg'
import Logo from '../../../assets/common/Logo.png'
import '../../../styles/components/common/StartRendering.scss'

const StartRendering = () => {
    const navigate = useNavigate();
    const onBtnClick = () => {
        navigate('/camera')
    }
    return (
        <div className='StartRendering_Container'>
            <div className='StartRendering_Wrapper'>
                <div className='StartRendering_TextBox_LayOut'>
                    <div className='StartRendering_TextBox1'>양말의 짝을 구분해드려요!</div>
                    <div className='StartRendering_TextBox2'>화면 하단의 버튼을 이용해 촬영하기!</div>
                </div>
                <img src={Logo} alt='' className='StartRendering_Img'/>
                <button className='StartRendering_Btn' onClick={onBtnClick}>촬영하기</button>
            </div>
        </div>
    );
};

export default StartRendering;