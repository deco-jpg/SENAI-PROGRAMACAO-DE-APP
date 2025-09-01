// src\components\infocurso\index.jsx
import './styles.css';

function InfoCurso () {
    const dados = 'O curso é massa demais';
    const ch = 120;
    const local = 'Senai Dendezeiros';
    const dataIn = '02/02/2025';
    const dataT = '02/02/2027';
    return (
        <div className='infoaluno'>
            <h3>Informações do Curso</h3>
            <p>Dados: {dados}</p>
            <p>Carga Horária: {ch}</p>
            <p>Local {local}</p>
            <p>Data de início: {dataIn}</p>
            <p>Data de término: {dataT}</p>
        </div>
    );
}

export default InfoCurso;