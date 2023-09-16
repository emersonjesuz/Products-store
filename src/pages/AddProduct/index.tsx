import { ChangeEvent, FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useGlobalContext from "../../hooks/useGlobalContext.tsx";
import { ProductsType } from "../../types/ProductsType.ts";
import notify from "../../utils/notify.ts";
import styles from "./styles.module.scss";

const defaultForm = {
  id: 0,
  name: "",
  value: 0,
  stock: 0,
  description: "",
  image: "",
};
export default function AddProduct() {
  const { allProducts, setAllProducts } = useGlobalContext();
  const [form, setForm] = useState<ProductsType>({ ...defaultForm });
  const navegate = useNavigate();

  function handleChangeForm(event: ChangeEvent<HTMLInputElement>) {
    if (["value", "stock"].includes(event.target.name)) {
      setForm({
        ...form,
        [event.target.name]: event.target.valueAsNumber || 0,
      });
    }
    setForm({ ...form, [event.target.name]: event.target.value });
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();

    const localProducts = [...allProducts];
    const lastProductId = localProducts[localProducts.length - 1].id;

    form.id = lastProductId + 1;

    localProducts.push({ ...form });

    setAllProducts([...localProducts]);

    notify("Produto inserido com sucesso!", "success");

    navegate("/main");
  }

  return (
    <div className={styles.conteiner}>
      <div className={styles["sub-title"]}>
        <h2>Adicionar produtos</h2>
      </div>
      <div className={styles["content-form"]}>
        <form>
          <div className={styles["form-inputs"]}>
            <div className={styles["input-label"]}>
              <label htmlFor="name">Nome do produto</label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChangeForm}
                required
              />
            </div>
            <div className={styles["content-price-stock"]}>
              <div className={styles["input-label"]}>
                <label htmlFor="price">Preço</label>
                <input
                  type="number"
                  id="value"
                  name="value"
                  placeholder="R$"
                  value={form.value}
                  onChange={handleChangeForm}
                  required
                />
              </div>
              <div className={styles["input-label"]}>
                <label htmlFor="stoke">Estoque</label>
                <input
                  type="number"
                  id="stoke"
                  placeholder="Un"
                  name="stock"
                  value={form.stock}
                  onChange={handleChangeForm}
                  required
                />
              </div>
            </div>
            <div className={styles["input-label"]}>
              <label htmlFor="description">Descriçao do produto</label>
              <input
                type="text"
                id="description"
                name="description"
                value={form.description}
                onChange={handleChangeForm}
                required
              />
            </div>
            <div className={styles["input-label"]}>
              <label htmlFor="image">Imagem</label>
              <input
                type="text"
                id="image"
                name="image"
                value={form.image}
                onChange={handleChangeForm}
                required
              />
            </div>
          </div>

          <div className={styles["horizontal-line"]} />
          <div className={styles["content-buttons"]}>
            <Link to={"/main"}>Cancelar</Link>
            <button onClick={handleSubmit} className="btn-blue">
              Adicionar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
