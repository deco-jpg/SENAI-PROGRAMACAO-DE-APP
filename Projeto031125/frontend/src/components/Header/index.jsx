import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header style={{ background: "#222", color: "white", padding: "10px" }}>
      <nav style={{ display: "flex", gap: "15px" }}>
        <Link style={{ color: "white", textDecoration: "none" }} to="/">🏠 Home</Link>
        <Link style={{ color: "white", textDecoration: "none" }} to="/clientes">👥 Clientes</Link>
        <Link style={{ color: "white", textDecoration: "none" }} to="/produtos">📦 Produtos</Link>
        <Link style={{ color: "white", textDecoration: "none" }} to="/cadastro-cliente">📝 Cadastrar Cliente</Link>
        <Link style={{ color: "white", textDecoration: "none" }} to="/cadastro-produto">➕ Cadastrar Produto</Link>
      </nav>
    </header>
  );
}
