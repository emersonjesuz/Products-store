import { ProductsType } from "../../types/ProductsType.js";
import styles from "./styles.module.scss";
import removeIcon from "../../assets/remove.svg";
import { useState } from "react";
import useGlobalContext from "../../hooks/useGlobalContext.js";
import formatterToMoney from "../../helpers/formatter.ts";

type Props = {
  products: ProductsType;
};

export default function ProductCard({ products }: Props) {
  const [showDelete, setShowDelete] = useState(false);
  const { handleOpenModal } = useGlobalContext();
  return (
    <div
      onMouseOver={() => setShowDelete(true)}
      onMouseLeave={() => setShowDelete(false)}
      className={styles.container}
    >
      {showDelete && (
        <img
          onClick={() => handleOpenModal(products.id)}
          src={removeIcon}
          className={styles.remove}
          alt="remove icon"
        />
      )}
      <img
        src={products.image}
        className={styles["card-image"]}
        alt="Product"
      />

      <div className={styles["content-infos"]}>
        <h1>{products.name}</h1>
        <p>{products.description}</p>
        <div className={styles["content-price-qty"]}>
          <span>{products.stock} Unidades</span>
          <strong>{formatterToMoney(products.value)}</strong>
        </div>
      </div>
    </div>
  );
}
