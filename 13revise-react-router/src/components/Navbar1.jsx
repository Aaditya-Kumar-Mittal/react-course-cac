import React from "react";
import { Link, Outlet } from "react-router-dom";

function Navbar1() {
  return (
    <div className="container mx-auto">
      <nav className="bg-slate-900 text-white flex gap-4 justify-center items-center text-2xl">
        <Link to="/invoices">
          <span>Invoices</span>
        </Link>
        <Link to="/expenses">
          <span>Expenses</span>
        </Link>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}

export default Navbar1;
