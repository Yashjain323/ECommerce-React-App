import "./../App.css";
import Header from "./Header";
import Home from "./Home";
import VerifiedShopsList from "./VerifiedShopsList";
import BlockedShops from "./BlockedShops";
import NewRequestList from "./NewRequestsList";
import { Routes, Route } from "react-router-dom";
import ShopTemplate from "./ShopTemplate";
import Product from "./Product";
import ProductList from "./ProductList";
import VerifiedShopTemplate from "./VerifiedShopTemplate";
import ProductImages from "./ProductImages";
import CreateShop from "./CreateShop";
function RoutesFunc() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="home" element={<Home />}></Route>
        <Route path="newRequests/:id" element={<ShopTemplate />}></Route>
        <Route path="verifiedShopsList/:id" element={<VerifiedShopTemplate />}></Route>
        <Route path="newRequests" element={<NewRequestList />}></Route>
        <Route path="showProducts/:shopId" element={<ProductList />}></Route>
        <Route path="showProducts/:shopId/:id" element={<Product />}></Route>
        <Route path="showProductsImages/:shopId/:id" element={<ProductImages />}></Route>
        <Route path="verifiedShopsList" element={<VerifiedShopsList />}></Route>
        <Route path="blockedShops" element={<BlockedShops />}></Route>
        <Route path="createShop" element={<CreateShop />}></Route>
        <Route path="*" element={<Home />}></Route>
      </Routes>
    </>
  );
}

export default RoutesFunc;
