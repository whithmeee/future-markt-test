import React, { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import axios from "axios";

import Button from "../Ui/button/Button";
import mentor from "../../assets/mentor.png";
import imageSrc1 from "../../assets/Line 168.png";
import imageSrc2 from "../../assets/Line 170.png";
import arrowWhite from "../../assets/arrow_white.png";
import arrowOne from "../../assets/arrow_one.png";

import styles from "./Main.module.css";

const Main = ({ toggleModal }) => {
    const isMobile = useMediaQuery({ maxWidth: 990 });
    const isText = useMediaQuery({ maxWidth: 990 });
    const isDescriptiom = useMediaQuery({ maxWidth: 770 });
    const isStatic = useMediaQuery({ maxWidth: 770 });
    const [data, setData] = useState([]);
    const [dataTime, setDataTime] = useState(null);
    const [loading, setLoading] = useState(true);
    const date = new Date(dataTime);

    // // Получаем год, месяц и день

    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();

    // // Преобразуем год, месяц и день в строки
    const yearStr = year.toString();
    const monthStr = month < 10 ? "0" + month.toString() : month.toString();
    const dayStr = day < 10 ? "0" + day.toString() : day.toString();

    // // Суммируем числа года, месяца и дня
    const sum = [...yearStr, ...monthStr, ...dayStr].reduce(
        (acc, curr) => acc + parseInt(curr),
        0
    );

    const fecthData = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get(
                "https://www.cbr-xml-daily.ru/daily_json.js"
            );
            setData(data.Valute.GBP);
            setDataTime(data.Date);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fecthData();
    }, []);

    // текст для brackpoint

    const textMessen = isMobile ? "Записаться" : "Записаться на консультацию";
    const getTextMessen = isText ? "Записаться" : "Бесплатная консультация";
    const textDescription = isDescriptiom
        ? `ваш успех зависит
                    от ваших действий`
        : `Когда ваше время и энергия лучше сфокусированы, стремление к
                    новым возможностям становится реальностью, ваш успех зависит
                    от ваших действий`;
    const textOneStatic = isStatic ? `техник` : `техник для достижения целей`;
    const textTwoStatic = isStatic
        ? `продуктивности`
        : `увеличение личной продуктивности`;

    return (
        <div className={styles["main"]}>
            <div className={styles["main-content"]}>
                <h1 className={styles["main-title"]}>
                    Создаю условия для вашего успеха
                </h1>
                <p className={styles["main-description"]}>{textDescription}</p>
                <div className={styles["main-buttons"]}>
                    <Button
                        arrowOne={arrowOne}
                        imageSrc2={imageSrc2}
                        children={textMessen}
                    ></Button>
                    <Button
                        imageSrc1={imageSrc1}
                        arrowWhite={arrowWhite}
                        toggleModal={toggleModal}
                        isFree={true}
                        children={getTextMessen}
                    ></Button>
                </div>

                <div className={styles["main-statics"]}>
                    <div className={styles["statisc-one"]}>
                        {loading ? (
                            <div style={{ color: "#fff", fontSize: "20px" }}>
                                Загрузка...
                            </div>
                        ) : (
                            <span>{sum}+</span>
                        )}
                        <p>{textOneStatic}</p>
                    </div>
                    <div className={styles["statics-two"]}>
                        {loading ? (
                            <div style={{ color: "#fff", fontSize: "20px" }}>
                                Загрузка...
                            </div>
                        ) : (
                            <span>{Math.floor(data.Value)}%</span>
                        )}
                        <p>{textTwoStatic}</p>
                    </div>
                </div>
            </div>
            <div className={styles["main-img"]}>
                <img src={mentor} alt="" />
            </div>
        </div>
    );
};

export default Main;
