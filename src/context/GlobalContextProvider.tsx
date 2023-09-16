import useGlobalContextProvider from "../hooks/useGlobalContextProvider.js";
import GlobalContext from "./GlobalContext.js";

type Props = {
  childre: React.JSX.Element;
};

export default function GlobalContextProvider(props: Props) {
  const valuesProvider = useGlobalContextProvider();
  return (
    <GlobalContext.Provider value={valuesProvider}>
      {props.childre}
    </GlobalContext.Provider>
  );
}
