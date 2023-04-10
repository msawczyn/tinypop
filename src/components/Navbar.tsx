import { NavLink } from "react-router-dom";

const Navbar = () => {

   return (
      <nav className="navbar-container">
         <NavLink to="/"><img src="../images/logo192.png" alt="TinyPop" /></NavLink>
         <div className="menu">
         <NavLink to="/">Home</NavLink>
         <NavLink to="/portfolio">Portfolio</NavLink>
         <NavLink to="/shop">Shop</NavLink>
         <NavLink to="/contact">Contact</NavLink>
         </div>
      </nav>
   );
};

export default Navbar;

