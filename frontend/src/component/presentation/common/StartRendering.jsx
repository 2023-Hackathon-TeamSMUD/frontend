import React from 'react';
import '../../../styles/components/common/StartRendering.scss'

const StartRendering = ({onBtnClick, type, datas}) => {
    return (
        <div className='StartRendering_Container'>
            <div className='StartRendering_Wrapper'>
                <div className='StartRendering_TextBox_LayOut'>
                    <div className='StartRendering_TextBox1'>{datas[type].content1}</div>
                    <div className='StartRendering_TextBox2'>{datas[type].content2}</div>
                </div>
                {datas[type].imgUrl ? <img src={datas[type].imgUrl} alt='' className='StartRendering_Img'/> : <div className='StartRendering_Img_Undefined'></div>}
                <button className='StartRendering_Btn' onClick={onBtnClick}>촬영하기</button>
            </div>
        </div>
    );
};

export default StartRendering;