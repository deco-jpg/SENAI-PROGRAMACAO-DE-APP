import { useEffect, useState } from "react";
import axios from "axios";

export default function ProdutosPage() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/produtos")
      .then((res) => {
        setProdutos(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar produtos:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando produtos...</p>;

  return (
    <div>
      <h2>Lista de Produtos</h2>
      {produtos.length === 0 ? (
        <p>Nenhum produto cadastrado ainda.</p>
      ) : (
        <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr style={{ background: "#ddd" }}>
              <th>ID</th>
              <th>Nome</th>
              <th>Lote</th>
              <th>Validade</th>
              <th>Categoria</th>
              <th>Quantidade</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.nome}</td>
                <td>{p.lote}</td>
                <td>{p.validade}</td>
                <td>{p.categoria}</td>
                <td>{p.quantidade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
