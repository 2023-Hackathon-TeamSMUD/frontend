import React from 'react';
import { useNavigate } from 'react-router-dom';
import Back from '../../../assets/MainPage/Back.svg'
import '../../../styles/components/MainPage/StartRendering.scss'

const StartRendering = () => {
    const navigate = useNavigate();
    const onBtnClick = () => {
        navigate('/camera')
    }
    return (
        <div className='StartRendering_Container'>
            <div className='StartRendering_Wrapper'>
                <div className='StartRendering_TopBar'>
                    <img src={Back} alt='Back' style={{width : '14px', height : '24px'}}/>
                </div>
                <div className='StartRendering_TextBox_LayOut'>
                    <div className='StartRendering_TextBox1'>촬영한 양말에 맞는 코디를 추천드려요!</div>
                    <div className='StartRendering_TextBox2'>화면 하단의 버튼을 이용해 촬영하기!</div>
                </div>
                <button className='StartRendering_Btn' onClick={onBtnClick}>촬영하기</button>
            </div>
        </div>
    );
};

export default StartRendering;