import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/ProductCard/index.tsx";
import useGlobalContext from "../../hooks/useGlobalContext.tsx";
import styles from "./styles.module.scss";
export default function Main() {
  const navegate = useNavigate();

  const { allProducts, setAllProducts } = useGlobalContext();
  return (
    <div className={styles.conteiner}>
      <div className={styles["sub-title"]}>
        <h2>Seus Produtos</h2>

        <button onClick={() => navegate("/add-product")} className="btn-blue">
          Adicionar produto
        </button>
      </div>
      <div className={styles["content-products"]}>
        {allProducts.map((products) => (
          <ProductCard key={products.id} products={products} />
        ))}
      </div>
    </div>
  );
}
