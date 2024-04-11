import { Route, Routes } from "react-router-dom";
import CartComp from "./cart/CartComp";
import Singleproducts from "./product/[productId]/singleproducts";
import Content from "./components/content";
import Login from "./login/Login";
import SignUp from "./login/SignUp";
import Forgotpassword from "./login/Forgotpassword";
import Accountpage from "./account/AccountPage";
import PrivateRoutes from "./utils/PrivateRoutes";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/cart" element={<CartComp />} />
        <Route path="/product/:id" element={<Singleproducts />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/Forgotpassword" element={<Forgotpassword />} />
        <Route element={<PrivateRoutes />}>
          <Route path="/account" element={<Accountpage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
