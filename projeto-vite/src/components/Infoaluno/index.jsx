// src\components\infoaluno\index.jsx
import './styles.css';


function Infoaluno () {
    const nome = 'Danilo Sena';
    const idade = 23;
    const curso = 'Desenvolvimento de Sistemas';
    
    return (
    <div className='infoaluno'>
        <h2>Informações do aluno</h2>
        <p>Nome: { nome }</p>
        <p>Idade: { idade }</p>
        <p>Curso: { curso }</p>
    </div>
    );
}

export default Infoaluno;