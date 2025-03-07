import React from "react";
import close from "../images/icon-close.svg";
import rules from "../images/image-rules.svg";

const Model = ({toggle}) =>{
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