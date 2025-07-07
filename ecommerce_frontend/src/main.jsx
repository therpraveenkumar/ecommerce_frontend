import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './components/Landing.jsx';
import ShowProducts from './components/ShowProducts.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Authentication from './components/Authentication.jsx';

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/show-products" element={<ShowProducts />} />
      <Route path="/authentication" element={<Authentication />} />
    </Routes>
  </BrowserRouter>   
)
