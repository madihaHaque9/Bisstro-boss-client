import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Shared/Footer/Footer";
import NavBar from "../pages/Shared/NavBar/NavBar";
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
  } from '@tanstack/react-query'


const Main = () => {
    const location=useLocation();
    const noHeaderFooter=location.pathname.includes('login')|| location.pathname.includes('signup');
    return (
        <div>
            {noHeaderFooter || <NavBar></NavBar>}
           <Outlet></Outlet> 
           {noHeaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;