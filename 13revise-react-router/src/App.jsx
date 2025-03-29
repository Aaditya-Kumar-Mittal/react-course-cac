import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Dashboard, HomePage, PageNotFound, Products, ProfilePage, Settings } from "./pages";
import { NavBar2 } from "./components";

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar2/>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/dashboard" element={<Dashboard/>}>
            <Route path="profile" element={<ProfilePage/>}/>
            <Route path="settings" element={<Settings/>}/>
          </Route>
          <Route path="/products/:id" element={<Products/>}/>
          {/* <Route path='*' element={<PageNotFound/>}/>  It is used to redirect to specified page if the page is not found*/}
          {/* <Route path='*' element={<Navigate to="/"/>}/>  It is used to redirect to another page if the page is not found*/} 
          <Route path ="/*" element={<Navigate to="/"/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
