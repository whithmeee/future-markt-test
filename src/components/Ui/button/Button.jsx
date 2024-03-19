import React from "react";
import styles from "./Button.module.css";

const Button = ({ children, isFree, toggleModal, imageSrc1, imageSrc2 }) => {
    const buttonClasses = `${styles.button} ${isFree ? styles.free : ""}`;
    return (
        <button onClick={toggleModal} className={buttonClasses}>
            <p>{children}</p>
            <img className={styles["line_img"]} src={imageSrc1} alt="" />
            <img className={styles["line_img"]} src={imageSrc2} alt="" />
        </button>
    );
};

export default Button;
