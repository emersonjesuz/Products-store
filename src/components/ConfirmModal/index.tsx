import styles from "./styles.module.scss";

type Props = {
  open: boolean;
  handleClose: () => void;
  handleConfirm: () => void;
};

export default function ConfirmModal({
  open,
  handleClose,
  handleConfirm,
}: Props) {
  return (
    <>
      {open && (
        <div className={styles.backDrop}>
          <div className={styles.modal}>
            <h2>Deseja Excluir esse produto?</h2>
            <div className={styles["conteiner-buttons"]}>
              <button className="btn-blue" onClick={handleConfirm}>
                Sim
              </button>
              <button className="btn-white" onClick={handleClose}>
                Não
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
