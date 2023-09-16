import { useState } from "react";
import products from "../data/products.js";
import { ProductsType } from "../types/ProductsType.js";
import { useLocalStorage } from "usehooks-ts";

export default function useGlobalContextProvider() {
  const [openModal, setOpenModal] = useState(false);
  const [currentIdProduct, setCurrentIdProduct] = useState(0);
  const [allProducts, setAllProducts] = useLocalStorage<ProductsType[]>(
    "products",
    products
  );

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
