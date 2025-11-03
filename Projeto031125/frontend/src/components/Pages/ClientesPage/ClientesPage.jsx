import { useEffect, useState } from "react";
import axios from "axios";

export default function ClientesPage() {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/usuarios")
      .then((res) => {
        setClientes(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erro ao buscar clientes:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Carregando clientes...</p>;

  return (
    <div>
      <h2>Lista de Clientes</h2>
      {clientes.length === 0 ? (
        <p>Nenhum cliente cadastrado ainda.</p>
      ) : (
        <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr style={{ background: "#ddd" }}>
              <th>ID</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Forma de Pagamento</th>
              <th>Endereço</th>
            </tr>
          </thead>
          <tbody>
            {clientes.map((c) => (
              <tr key={c.id}>
                <td>{c.id}</td>
                <td>{c.nome}</td>
                <td>{c.email}</td>
                <td>{c.telefone}</td>
                <td>{c.formaPagamento}</td>
                <td>{c.endereco}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}