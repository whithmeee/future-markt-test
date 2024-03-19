import styles from "./Header.module.css";
import logo from "../../assets/logo.svg";
import phone from "../../assets/phone.svg";

const MENU_LIST = [
    "Обо мне",
    "Наставничество",
    "Мероприятия",
    "Кейсы",
    "Отзывы",
    "Контакты",
];
const Header = () => {
    return (
        <header className={styles["header"]}>
            <div className={styles["header-logo"]}>
                <img src={logo} alt="header-logo" />
            </div>

            <nav className={styles["header-menu"]}>
                <ul className={styles["header-links"]}>
                    {MENU_LIST.map((list, index) => (
                        <li key={index}>
                            <a href="#">{list}</a>
                        </li>
                    ))}
                </ul>
            </nav>

            <div className={styles["header-contact"]}>
                <img src={phone} alt="" />
                <p>
                    <span>8-345-123-34-45</span>
                </p>
            </div>
        </header>
    );
};

export default Header;
