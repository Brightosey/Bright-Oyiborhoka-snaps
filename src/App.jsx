import HomePage from "./pages/homePage/homePage";
import PhotosPage from "./pages/photosPage/photosPage";
import Footer from "./components/footer/footer";
import "./App.scss";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/photos/:id" element={<PhotosPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
