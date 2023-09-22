import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Camera from '../../presentation/CameraPage/Camera';
import axios from 'axios';
import { useMutation } from 'react-query';


const uploadPhotos = async (photos) => {
    const formData = new FormData();
    
    photos.forEach((photo, index) => {
      formData.append(`photo${index + 1}`, photo);
    });

    console.log(formData);
    const response = await axios.post(`${process.env.REACT_APP_DB_HOST}/pair`, formData);
    console.log(response.data);
    return response.data;
  };

const CameraContainer = () => {
    const [captures, setCaptures] = useState([]);
    const [showServerModal, setShowServerModal] = useState(false);
    const [showResultModal, setShowResultModal] = useState(false);
    const navigate = useNavigate();
    const uploadMutation= useMutation(uploadPhotos);

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
        let serverTimer, resultTimer;
        if (captures.length === 2) {
            setShowServerModal(true);
            serverTimer = setTimeout(() => {
                setShowServerModal(false);
                setShowResultModal(true); // Show ResultModal right after ServerModal disappears
            }, 3000);
            uploadMutation.mutate(captures); 
        }
        return () => { 
            clearTimeout(serverTimer); 
            clearTimeout(resultTimer); // Clear both timers if the component unmounts
        };
    }, [captures]);

    return (
        <Camera 
            webcamRef={webcamRef}
            capturePhoto={capturePhoto}
            captures={captures}
            showServerModal={showServerModal}
            showResultModal={showResultModal}
            setShowResultModal={setShowResultModal}  
            navigate={navigate}
        />
    );
};

export default CameraContainer;