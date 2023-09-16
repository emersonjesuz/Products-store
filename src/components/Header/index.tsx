import styles from "./styles.module.scss";
import logoIcone from "../../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles.conteiner}>
      <Link to="/main">
        <img src={logoIcone} alt="logo" />
      </Link>
    </header>
  );
}
