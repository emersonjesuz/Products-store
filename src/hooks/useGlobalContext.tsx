import { useContext } from "react";
import GlobalContext from "../context/GlobalContext.js";

export default function useGlobalContext() {
  return useContext(GlobalContext);
}
