import { Link } from "react-router-dom";
import { FaShoppingCart } from 'react-icons/fa';
import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProvider";
import useCart from "../../../hooks/useCart";


const NavBar = () => {
  const {user,logOut}=useContext(AuthContext);
  console.log(user)
  const [cart]=useCart();
  const handleLogOut=()=>{
       logOut()
       .then(()=>{})
       .catch(error=>console.log(error))

  }
    const navOption=<>
    <li><Link to='/'>Home</Link></li>
    <li><Link to='/menu'>Our Menu</Link></li>
    
    <li><Link to='/order/salad'>Order Food</Link></li>
    
    <li><Link to='/dashboard/cart'>
    
      
    <button className="btn">
  <FaShoppingCart className="mr-2"></FaShoppingCart>
  <div className="badge badge-secondary">+{cart.length}</div>
</button>

    </Link></li>
    {
      user ?<>
      <button onClick={handleLogOut} className="btn btn-primary">Log Out</button>
      </>:<>
      <li><Link to='/login'>Login</Link></li>
      </>
    }
 
     </>  
    
    return (
        <div className="navbar  max-w-screen-xl mx-auto fixed z-10 opacity-40 bg-black text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow text-white  rounded-box w-52">
        {navOption}
      </ul>
    </div>
    <a className="btn text-white btn-ghost normal-case text-xl">Bistro Boss</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navOption}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default NavBar;