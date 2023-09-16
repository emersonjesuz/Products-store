import { useState } from "react";
import products from "../data/products.js";
import { ProductsType } from "../types/ProductsType.js";

export default function useGlobalContextProvider() {
  const [openModal, setOpenModal] = useState(false);
  const [currentIdProduct, setCurrentIdProduct] = useState(0);
  const [allProducts, setAllProducts] = useState<ProductsType[]>([...products]);

  function handleConfirmModal() {
    const localProducts = [...allProducts];
    const currentProductIndex = localProducts.findIndex(
      (product) => product.id === currentIdProduct
    );

    localProducts.splice(currentProductIndex, 1);

    setAllProducts([...localProducts]);

    setOpenModal(false);
  }
  function handleCloseModal() {
    setOpenModal(false);
  }
  function handleOpenModal(productId: number) {
    setCurrentIdProduct(productId);
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
