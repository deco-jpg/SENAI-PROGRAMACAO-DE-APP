import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./Pages/HomePage/HomePage.jsx";
import ClientesPage from "./Pages/ClientesPage/ClientesPage.jsx";
import ProdutosPage from "./Pages/ProdutosPage/ProdutosPage.jsx";
import CadastroCliente from "./Pages/CadastroCliente/CadastroCliente.jsx";
import CadastroProduto from "./Pages/CadastroProduto/CadastroProduto.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <main style={{ padding: "20px" }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/clientes" element={<ClientesPage />} />
          <Route path="/produtos" element={<ProdutosPage />} />
          <Route path="/cadastro-cliente" element={<CadastroCliente />} />
          <Route path="/cadastro-produto" element={<CadastroProduto />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
