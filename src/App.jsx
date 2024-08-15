



import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import CartProduct from "./pages/CartProduct";
import SearchProduct from "./pages/SearchProduct";
import ProductDisplay from "./pages/ProductDisplay";

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="Home" element={<Home/>}/>
    <Route path="cartproduct" element={<CartProduct/>}/>
    <Route path="searchproduct" element={<SearchProduct/>}/>
    <Route path="productdisplay" element={<ProductDisplay/>}/>

    </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}
export default App;
