import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function CadastroProduto() {
  const [form, setForm] = useState({
    nome: "",
    lote: "",
    validade: "",
    categoria: "",
    quantidade: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/produtos", form)
      .then(() => {
        alert("Produto cadastrado com sucesso!");
        navigate("/produtos");
      })
      .catch((err) => {
        console.error("Erro ao cadastrar produto:", err);
        alert("Erro ao cadastrar produto.");
      });
  };

  return (
    <div>
      <h2>Cadastrar Produto</h2>
      <form onSubmit={handleSubmit}>
        <input name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} /><br />
        <input name="lote" placeholder="Lote" value={form.lote} onChange={handleChange} /><br />
        <input name="validade" placeholder="Validade" value={form.validade} onChange={handleChange} /><br />
        <input name="categoria" placeholder="Categoria" value={form.categoria} onChange={handleChange} /><br />
        <input name="quantidade" type="number" placeholder="Quantidade" value={form.quantidade} onChange={handleChange} /><br />
        <button type="submit">Salvar</button>
      </form>
    </div>
  );
}
