import React from "react";
import styles from "./Button.module.css";

const Button = ({
    children,
    isFree,
    toggleModal,
    imageSrc1,
    imageSrc2,
    arrowWhite,
    arrowOne,
}) => {
    const buttonClasses = `${styles.button} ${isFree ? styles.free : ""}`;
    return (
        <button onClick={toggleModal} className={buttonClasses}>
            <p>{children}</p>
            <img className={styles["line_img"]} src={imageSrc1} alt="" />
            <img className={styles["line_img"]} src={imageSrc2} alt="" />
            <img className={styles["img_white"]} src={arrowWhite} alt="" />
            <img className={styles["img_one"]} src={arrowOne} alt="" />
        </button>
    );
};

export default Button;
