import React from "react";
import styles from "./Modal.module.css";

const Modal = ({ children, isOpen, modalType }) => {
    return (
        <>
            {isOpen && (
                <div className={styles["modal-overlay"]}>
                    <div className={styles["modal"]}>
                        <div className={styles["modal-content"]}>
                            {modalType === "callBack" && <>{children}</>}

                            {modalType === "thankYou" && <>{children}</>}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Modal;
