import React from 'react';
import ResultModal from '../../presentation/CameraPage/ResultModal';

const ResultModalContainer = ({ result, setShowResultModal }) => {
    const handleRestartCamera = () => {
        window.location.reload();
      };
    
      const handleCloseModal = () => {
        setShowResultModal(false);
      }
    return (
        <ResultModal
            result={result}
            handleCloseModal={handleCloseModal}
            handleRestartCamera={handleRestartCamera}
        />
    );
};

export default ResultModalContainer;