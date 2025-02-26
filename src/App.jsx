import HomePage from "./pages/homePage/homePage";
import PhotosPage from "./pages/photosPage/photosPage";
import Footer from "./components/footer/footer";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const backendUrl = import.meta.env.VITE_BACKEND_URL;

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
