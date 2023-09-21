import React from "react";
import "../../../styles/components/CameraPage/resultModal.scss";
import xicon from "../../../assets/CameraPage/xicon.webp"
import oicon from "../../../assets/CameraPage/oicon.webp"

const ResultModal = ({ result, setShowResultModal }) => {

  const handleRestartCamera = () => {
    window.location.reload();
  };

  const handleCloseModal = () => {
    setShowResultModal(false);
  }

  return (
    <div className="modalContainer">
        <div className="resultModal">
          {result === 0 ? (
            <>
              <img className="resultIcon" src={xicon} alt="짝이 아닙니다." />
              <h2 className="resultText">짝이 아닙니다!</h2>
              <button className="resultBtn" onClick={handleRestartCamera}>다시 촬영하기</button>
            </>
          ) : (
            <>
              <img className="resultIcon" src={oicon} alt="짝이 맞습니다." />
              <h2 className="resultText">짝이 맞습니다!</h2>
              <button className="resultBtn" onClick={handleCloseModal}>종료하기</button>
            </>
          )}
        </div>
    </div>
  );
};

export default ResultModal;
