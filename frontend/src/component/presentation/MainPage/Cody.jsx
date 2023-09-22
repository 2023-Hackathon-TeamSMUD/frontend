import React, {useState} from 'react';
import '../../../styles/components/MainPage/Cody.scss'
import Progress3 from '../../../assets/MainPage/Progress3.png'
import Top from '../../../assets/MainPage/Top.png'
import Pant from '../../../assets/MainPage/Pants.png'
import Shoe from '../../../assets/MainPage/Shoe.png'
import { useNavigate } from 'react-router-dom';

const Cody = ({result}) => {
    const navigate = useNavigate();
    const [isSaved, setIsSaved] = useState(false);
    const [showAlert, setShowAlert] = useState(false); // 새로운 상태 변수 추가
    console.log(result)
    const handleSaveResult = () => {
        if (isSaved ===  false) {
            localStorage.setItem('myResult', JSON.stringify(result));
            setIsSaved(true);  // 저장 완료 후 isSaved 상태 변경
            setShowAlert(true); // 저장 완료 후 showAlert 상태 변경
            setTimeout(() => { // 3초 후 showAlert을 false로 설정
                setShowAlert(false);
            }, 100000);
        } else {
            alert('이미 저장된 코디입니다!');
        }
      };
      console.log(JSON.parse(localStorage.getItem('myResult')))
      console.log(localStorage.length)
    //localStorage.clear();

    return (
        <div className='Cody_Container'>
            <div className='Cody_Wrapper'>
                <img src={Progress3} alt='Progress' className='SelectGender_Progress'/>
                <div className='Cody_TextBox_LayOut'>
                    <div className='Cody_TextBox1'>코디를 추천해드릴게요!</div>
                    <div className='Cody_TextBox2'>흰색 양말에 어울리는 상의, 하의, 신발입니다.</div>
                </div>
                <div className='Cody_Recommend_LayOut'>
                    <div className='Cody_Recommend_Box'>
                        <img src={Top} alt='' />
                        {result.stylings[0].top}
                    </div>
                    <div className='Cody_Recommend_Box'>
                        <img src={Pant} alt='' />
                        {result.stylings[0].pants}
                    </div>
                    <div className='Cody_Recommend_Box'>
                        <img src={Shoe} alt='' />
                        {result.stylings[0].shoes}
                    </div>
                </div>
                <div className='Cody_Recommend_Btn_Layout'>
                    <button className='Cody_Recommend_Btn1' onClick = {()=>navigate('/')}>종료하기</button>
                    <button className='Cody_Recommend_Btn2'  disabled={isSaved} onClick = {handleSaveResult}>저장하기</button>
                </div>

                {showAlert && 
                 ((localStorage.length < 6) ? 
                    <div className='Cody_Alert'>양말 코디를 저장했어요!</div> 
                    : 
                    <div className='Cody_Alert'>최대 5개의 코디까지 저장할 수 있습니다.</div>)
                }
            </div>
        </div>
    );
};

export default Cody;