import { Outlet } from "react-router-dom";
import ConfirmModal from "../../components/ConfirmModal/index.tsx";
import Header from "../../components/Header/index.tsx";

import useGlobalContext from "../../hooks/useGlobalContext.tsx";
import styles from "./styles.module.scss";

export default function HeaderLayout() {
  const { openModal, handleCloseModal, handleConfirmModal } =
    useGlobalContext();
  return (
    <div className={styles.conteiner}>
      <Header />
      <div className={styles["content-page"]}>
        <h1>Nome da loja</h1>
        <Outlet />
      </div>
      <ConfirmModal
        open={openModal}
        handleClose={handleCloseModal}
        handleConfirm={handleConfirmModal}
      />
    </div>
  );
}
