import { NavLink, Outlet } from "react-router-dom";

export const Home = () => {
    return(
      <>
        <nav className="nav-container">
          <NavLink to="/">Show All Products</NavLink>
          <NavLink to="/add">Add Product</NavLink>
          {/* <NavLink to="/showbyid/:id">Show Product by ID</NavLink> */}
        </nav>
        <hr />


        <Outlet />
      </>
    );
}