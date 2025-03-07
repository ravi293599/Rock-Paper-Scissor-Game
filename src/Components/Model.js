import React from "react";
import ReactDOM  from "react-dom";
import close from "../images/icon-close.svg";
import rules from "../images/image-rules.svg";

const Model = ({toggle}) =>{
    // return ReactDOM.createPortal(
    //     <div className="model-container">
    //         <div className="model-box">
    //             <div className="model__header">
    //                 <h1>Rules</h1>
    //                 <button onClick={toggle}>
    //                     <img src={close} alt="Close" />
    //                 </button>
    //             </div>
    //             <img src={rules} alt="Rules" />
    //         </div>
    //     </div>,
    //     document.getElementById("model")
    // )
    return(
        <div className="model-container">
            <div className="model-box">
                     <span onClick={toggle} className="model-close">
                        <img src={close} alt="Close" />
                    </span>
                <div className="model__header">
                    <div className="model-title">
                        <h1>Rules</h1>
                    </div>
                </div>
                <img src={rules} alt="Rules" />
            </div>
        </div>
    )
};
export default Model;