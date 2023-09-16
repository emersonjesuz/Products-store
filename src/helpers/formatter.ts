export default function formatterToMoney(value: number) {
  return value.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
}
