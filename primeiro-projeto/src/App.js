import React, { useState } from 'react';
import './App.css';

function App() {
  //Cria uma variavel e um setter (forma de add dados) para os usuarios.
  const [usuario, setUsuario] = useState('');
  //Cria uma variavel e um setter (forma de add dados) para os usuarios.
  const [usuarios, setUsuarios] = useState(['Marta', 'João', 'Ana']);

  
  //funcao para verificar se o usuario ja existe e adiciona-lo à lista.

  
  const adicionarUsuario = () => {
      //se o ususario já existir, exibe um alerta.
    if (usuarios.includes(usuario)) {
      alert('Usuário já existe!');
      return;
    } 

      //se o usuario não existir, adiciona o usuario à lista e limpa o campo de entrada.
      //adiciona todos os usuarios à lista.
      setUsuarios([...usuarios, usuario]);
      setUsuario('');
      };

return ( 
  <div className = "App" >
    <h1>ADICIONAR USUÁRIO</h1>
    <input 
      type = "text" 
      value = { usuario } 
      onChange = { (e) => setUsuario(e.target.value) } 
      placeholder = "Digite um nome de usuário" 
    />
    <button onClick = { adicionarUsuario } > Adicionar Usuário </button>
    <hr />
    <h2>Lista de Usuários</h2>
    <ul>
      { usuarios.map((user, index) => (
        <li key = { index } > { user } </li>
      )) }
    </ul>
  </div>
)
}
export default App;
