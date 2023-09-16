import { createContext, Dispatch, SetStateAction } from "react";
import { ProductsType } from "../types/ProductsType.js";
type GlobalContextType = {
  openModal: boolean;
  handleConfirmModal: () => void;
  handleCloseModal: () => void;
  handleOpenModal: () => void;
  setAllProducts: Dispatch<SetStateAction<ProductsType[]>>;
  allProducts: ProductsType[];
};

const GlobalContext = createContext<GlobalContextType>({
  openModal: false,
  handleCloseModal: () => {},
  handleConfirmModal: () => {},
  handleOpenModal: () => {},
  setAllProducts: () => {},
  allProducts: [],
});
export default GlobalContext;
