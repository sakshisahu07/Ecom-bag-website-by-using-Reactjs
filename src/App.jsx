



import { BrowserRouter,Routes,Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Home";
import Shop from "./Shop"
import Contact from "./Contact";
import Product from "./Product";
import Foxkit from "./Foxkit";

const App=()=>{
  return(
    <>
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="Home" element={<Home/>}/>
    <Route path="Shop" element={<Shop/>}/>
    <Route path="Product" element={<Product/>}/>
    <Route path="Foxkit" element={<Foxkit/>}/>
    <Route path="Contact" element={<Contact/>}/>
    
    </Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}
export default App;
