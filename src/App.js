import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import {Route, Routes} from "react-router-dom";
import AllProductsPage from './Components/AllProductsPage';
import ProductPage from "./Components/ProductPage";

function App() {
    return (
        <Routes>
            <Route path="/" element={<AllProductsPage />} />
            <Route path="/products" element={<AllProductsPage />} />
            <Route path="/products/:id" element={<ProductPage />} />

        </Routes>
    )
}
export default App;
