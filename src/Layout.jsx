

import { Link, Outlet } from "react-router-dom";
import Topmenu from "./component/topmenu";
import Footer from "./component/Footer";
const Layout=()=>{
    return(
        <>
            {/* <Link to="Home">Home</Link>
            <Link to="Shop">Shop</Link>
            <Link to="Product">Product</Link>
            <Link to="Foxkit">Foxkit</Link>
            <Link to="Contact">Contact</Link>

            <hr size="3" color="danger"/>
                <Outlet/>
            <hr size="3" color="danger"/>
                www.mycompany.com 2024 */}

                <Topmenu/>

                <Outlet/>
                
                <Footer/>

        </>
    )
}
export default Layout;
