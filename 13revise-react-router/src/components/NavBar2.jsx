import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function NavBar2() {
  return (
    <div className="container mx-auto my-5">
      <nav className="flex justify-center items-center font-bold text-white p-5 mx-auto gap-4 bg-slate-900 rounded-md">
        <Link to="/">
          <span>Home</span>
        </Link>
        <Link to="/dashboard">
          <span>Dashboard</span>
        </Link>
        <Link to='/products/1'>
          <span>Products</span>
        </Link>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}
export default NavBar2;