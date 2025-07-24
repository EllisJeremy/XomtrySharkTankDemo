import styles from "./Header.module.css";
import header from "../../assets/header.png";

export default function Footer() {
  return (
    <header className={styles.footer}>
      <img src={header} className={styles.headerImg}></img>
    </header>
  );
}
