import styles from "./EducationPage.module.css";
import introImg from "../../assets/introImg.jpeg";
import Button from "../../components/Button/Button";

export default function EducationPage() {
  return (
    <div className={styles.marginDiv}>
      <div className={styles.introDiv}>
        <div className={styles.introContentDiv}>
          <h1 className={styles.header}>
            Prototypes and Production Parts for Engineering Students &
            Universities
          </h1>
          <Button text={"Get Your Instant Quote"} />
        </div>
        <div className={styles.introImgDiv}>
          <img src={introImg} className={styles.introImg}></img>
        </div>
      </div>
    </div>
  );
}
