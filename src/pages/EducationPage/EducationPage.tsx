import styles from "./EducationPage.module.css";
import introImg from "../../assets/introImg.jpeg";

export default function EducationPage() {
  return (
    <div className={styles.marginDiv}>
      <div className={styles.introDiv}>
        <div className={styles.introContentDiv}>
          <h1 className={styles.header}>
            Prototypes and Production Parts for Engineering Students &
            Universities
          </h1>
        </div>
        <div className={styles.introImgDiv}>
          <img src={introImg} className={styles.introImg}></img>
        </div>
      </div>
    </div>
  );
}
