import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ConfirmModal from "../../components/ConfirmModal/index.tsx";
import Header from "../../components/Header/index.tsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useGlobalContext from "../../hooks/useGlobalContext.tsx";
import styles from "./styles.module.scss";

export default function HeaderLayout() {
  const { openModal, handleCloseModal, handleConfirmModal } =
    useGlobalContext();
  const navegate = useNavigate();
  useEffect(() => {
    navegate("/main");
  }, []);

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
      <ToastContainer />
    </div>
  );
}
