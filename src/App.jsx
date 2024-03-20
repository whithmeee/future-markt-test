import React, { useState } from "react";
import img_modal from "./assets/logo_modal.png";
import Modal from "./components/Ui/modal/Modal";
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Button from "./components/Ui/button/Button";
import arrowWhite from "./assets/arrow_white.png";
import imageSrc1 from "./assets/Line 168.png";
import close from "./assets/close.png";

import "./App.css";

function App() {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");

    const [nameDirty, setNameDirty] = useState(false);
    const [phoneDirty, setPhoneDirty] = useState(false);

    const [nameError, setNameError] = useState("Имя не может быть пустым");
    const [phoneError, setPhoneError] = useState(
        "Телефон не может быть пустым"
    );

    const [isOpen, setIsOpen] = useState(false);
    const [modal, setModal] = useState(false);

    const nameHandler = (e) => {
        const inputValue = e.target.value.trim();

        if (!inputValue && nameDirty) {
            setNameError("Имя не может быть пустым");
        } else {
            setName(inputValue);
            setNameError("");
        }
    };

    const phoneHandler = (e) => {
        const re = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

        if (!re.test(e.target.value)) {
            setPhoneError("Неверный формат телефона");
        } else {
            setPhoneError("");
        }
        setPhone(e.target.value);
    };

    const blurHandler = (e) => {
        switch (e.target.name) {
            case "name":
                setNameDirty(true);
                break;
            case "phone":
                setPhoneDirty(true);
                break;
            default:
        }
    };

    const sendForm = (e) => {
        e.preventDefault();
        if (!nameError && !phoneError && name && phone) {
            setModal(true);
            setIsOpen(false);
            setName("");
            setPhone("");
        }
    };

    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="container">
            <Header />
            <Main toggleModal={toggleModal} />

            <Modal modalType="callBack" isOpen={isOpen}>
                <span onClick={() => toggleModal(false)} className="close">
                    <img src={close} alt="close" />
                </span>
                <h5 className="modal-title">Закажите обратный звонок</h5>

                <form onSubmit={sendForm}>
                    <div className="form-name">
                        {nameDirty && nameError && (
                            <div style={{ color: "red" }}>{nameError}</div>
                        )}
                        <input
                            name="name"
                            onBlur={(e) => blurHandler(e)}
                            onChange={(e) => nameHandler(e)}
                            value={name}
                            className="name"
                            type="text"
                            placeholder="Имя"
                        />
                    </div>
                    <div className="form-phone">
                        {phoneDirty && phoneError && (
                            <div style={{ color: "red" }}>{phoneError}</div>
                        )}
                        <input
                            name="phone"
                            onChange={(e) => phoneHandler(e)}
                            onBlur={(e) => blurHandler(e)}
                            value={phone}
                            className="phone"
                            type="phone"
                            placeholder="Телефон"
                        />
                    </div>

                    <div className="form-checxbox">
                        <input className="checkbox" type="checkbox" />
                        <p>
                            Согласен на сохранение и обработку персональных
                            данных
                        </p>
                    </div>

                    <Button
                        arrowWhite={arrowWhite}
                        imageSrc1={imageSrc1}
                        isFree={true}
                        onClick={sendForm}
                        children={"Заказать"}
                    />
                </form>
            </Modal>

            <Modal isOpen={modal} modalType="thankYou">
                <div className="thank_block">
                    <span
                        onClick={() => setModal(false)}
                        className="close_thank "
                    >
                        <img src={close} alt="close" />
                    </span>
                    <p className="title__thank">Спасибо за заявку</p>

                    <div className="thank__text">
                        Я обязательно свяжусь с вами в ближайшее время.
                    </div>

                    <img
                        className="img_thank"
                        src={img_modal}
                        alt="logo_modal"
                    />
                </div>
            </Modal>
        </div>
    );
}

export default App;
