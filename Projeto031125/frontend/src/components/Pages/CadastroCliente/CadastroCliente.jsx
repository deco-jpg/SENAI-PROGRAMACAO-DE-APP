import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CadastroCliente() {
  const [form, setForm] = useState({
    nome: "",
    email: "",
    telefone: "",
    formaPagamento: "",
    endereco: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/usuarios", form)
      .then(() => {
        alert("Cliente cadastrado com sucesso!");
        navigate("/clientes");
      })
      .catch((err) => {
        console.error("Erro ao cadastrar cliente:", err);
        alert("Erro ao cadastrar cliente.");
      });
  };

  return (
    <div>
      <h2>Cadastrar Cliente</h2>
      <form onSubmit={handleSubmit}>
        <input name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} /><br />
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} /><br />
        <input name="telefone" placeholder="Telefone" value={form.telefone} onChange={handleChange} /><br />
        <input name="formaPagamento" placeholder="Forma de Pagamento" value={form.formaPagamento} onChange={handleChange} /><br />
        <input name="endereco" placeholder="Endereço" value={form.endereco} onChange={handleChange} /><br />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
