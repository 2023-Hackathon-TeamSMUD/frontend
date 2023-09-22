import React, {useState, useEffect} from 'react';
import MainPage from '../../../pages/MainPage';
import { postFashion } from '../../../api/postFashion';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';

const MainPageContainer = () => {
    const [gender, setGender] = useState();
    const [showServerModal, setShowServerModal] = useState(false);
    const [result, setResult] = useState();
    const navigate = useNavigate();

    const uploadData = useMutation(postFashion, {
        onSuccess: (data) => {
            setResult(data);
            console.log(data);
            console.log(result);
          },
    })

    const [captures, setCaptures] = useState([]);
    const webcamRef = React.useRef(null);
    const capturePhoto = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        fetch(imageSrc)
          .then(res => res.blob())
          .then(blob => {
            const file = new File([blob], "image.jpeg", { type: "image/jpeg" });
            setCaptures(prevState => [...prevState, file]);
          });
      };  


    useEffect(() => {
        let serverTimer;
        if (captures.length === 1) {
            setShowServerModal(true);
            serverTimer = setTimeout(() => {
                setShowServerModal(false);
            }, 3000);
            navigate('/main/gender')
        }
        return () => { 
            clearTimeout(serverTimer); 
        };
    }, [captures]);


    return (
        <MainPage
            gender={gender}
            setGender={setGender}
            webcamRef={webcamRef}
            capturePhoto={capturePhoto}
            captures={captures}
            showServerModal={showServerModal}
            uploadData={uploadData}
        />
    );
};

export default MainPageContainer;