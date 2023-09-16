import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import HeaderLayout from "./layouts/HeaderLayout/index.tsx";
import AddProduct from "./pages/AddProduct/index.tsx";
import Main from "./pages/main/index.jsx";

export const MainRoutes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<HeaderLayout />}>
      <Route path="/main" element={<Main />} />
      <Route path="/add-product" element={<AddProduct />} />
    </Route>
  )
);
