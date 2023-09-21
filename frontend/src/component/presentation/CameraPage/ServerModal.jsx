import React from "react";
import { Icon } from "@iconify/react";
import '../../../styles/components/CameraPage/serverModal.scss';

// const ServerModal= () => {
//     return(
//         <div className="modalContainer">
//           <div className="modalContent">
//             <h2 className="server-text">
//               양말을 구분중입니다.
//               <br />
//               <span style={{ fontSize: 16 }}>잠시만 기다려주세요.</span>
//             </h2>
//             <Icon icon="line-md:loading-loop" color="#ddfd5c" width="60" />
//           </div>
//         </div>
//     )
// }

const ServerModal = () => {
  return (
    <div className="ServerModal_Container">
      <div className="ServerModal_Wrapper">
        <div className="ServerModal_TextLayOut">
          <div className="ServerModal_Text1">양말을 구분중입니다.</div>
          <div className="ServerModal_Text2"><span style={{ fontSize: 16 }}>잠시만 기다려주세요.</span></div>
        </div>
        <div className="ServerModal_Logo">
          <Icon icon="line-md:loading-loop" color="#ddfd5c" width="60" />
        </div>
      </div>
    </div>
  )
}

export default ServerModal;