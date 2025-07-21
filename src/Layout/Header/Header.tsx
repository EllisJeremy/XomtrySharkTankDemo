import styles from "./Header.module.css";
import header from "../../assets/header.png";

export default function Header() {
  return (
    <header>
      <img src={header} className={styles.headerImg}></img>
    </header>
  );
}
