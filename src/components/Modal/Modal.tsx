import styles from './Modal.module.css';
import { useModalStore } from "../../store";

export default function Modal() {
  const { modal, setModal } = useModalStore();

  if (!modal) return null;

  const handleClose = () => setModal();

  return (
    <div className={styles.overlay} onClick={handleClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={handleClose}>
          &times;
        </button>
        <div className={styles.content}>
          <h2>Modal Title</h2>
          <p>This is a modal body.</p>
        </div>
      </div>
    </div>
  );
}
