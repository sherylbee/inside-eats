import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const ModalBackdrop = (props) => {
  return(
    <React.Fragment>
        {ReactDOM.createPortal(<div className={`${styles["modal-backdrop"]}`} style={{zIndex:props.layer}}></div>,
            document.getElementById("backdrop-root")
        )}
    </React.Fragment>
  )

};

export default ModalBackdrop;
