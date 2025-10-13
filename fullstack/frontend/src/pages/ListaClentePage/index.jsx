// frontend\src\pages\ListaClentePage\index.jsx
import React, { useState, UseEffect, useEffect } from 'react';
import api from '../../services/api';
import './styles.css';

function ListaClientePage() {
  const [clientes, setClientes] = useState([]);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function fetchClientes() {
      try {
        const response = await api.get('/usuarios');
        setClientes(response.data);
      } catch (error) {
        console.error('Erro ao buscar usuários:', error);
      } finally {
        setCarregando(false);
      }
    }

    fetchClientes();
  }, []);

  if (carregando) {
    return <div>Carregando...</div>;
  }

    return (
    <div className="lista-clientes-container">
      <h1>Lista de Clientes</h1>
      {clientes.length === 0 ? (
        <p>Nenhum cliente encontrado.</p>
      ) : (
        <table>
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {usuarios.map((usuario) => (
                    <tr key={usuario.id}>
                        <td>{usuario.nome}</td>
                        <td>{usuario.email}</td>
                    </tr>
                ))}
            </tbody>
            </table>
      )}
    </div>
  );
}

export default ListaClientePage;