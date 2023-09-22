import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Camera from '../../presentation/CameraPage/Camera';

const CameraContainer = () => {
    const [captures, setCaptures] = useState([]);
    const [showServerModal, setShowServerModal] = useState(false);
    const [showResultModal, setShowResultModal] = useState(false);
    const navigate = useNavigate();

    const webcamRef = React.useRef(null);

    const capturePhoto = () => {
        const imageSrc = webcamRef.current.getScreenshot();
        fetch(imageSrc)
        .then(res => res.blob())
        .then(blob => {
            const url = URL.createObjectURL(blob);
            setCaptures(prevState => [...prevState, url]);
            console.log(url); // This will now log the blob URL instead of the Base64 data
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