import { useState } from "react";
import products from "../data/products.js";
import { ProductsType } from "../types/ProductsType.js";

export default function useGlobalContextProvider() {
  const [openModal, setOpenModal] = useState(false);
  const [allProducts, setAllProducts] = useState<ProductsType[]>([...products]);

  function handleConfirmModal() {
    setOpenModal(false);
  }
  function handleCloseModal() {
    setOpenModal(false);
  }
  function handleOpenModal() {
    setOpenModal(true);
  }

  return {
    openModal,
    handleCloseModal,
    handleConfirmModal,
    handleOpenModal,
    allProducts,
    setAllProducts,
  };
}
