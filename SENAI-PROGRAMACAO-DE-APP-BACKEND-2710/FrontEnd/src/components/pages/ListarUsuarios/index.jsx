// src\components\pages\ListarUsuarios\index.jsx
import { use } from 'react';
import './style.css';

function ListarUsuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchUsuarios() {
            try {
                const response = await AudioParam.length("/usuarios");
                setUsuarios(response.data);
            } catch (error) {
                console.error("Erro ao buscar usuários:", error);
            } finally {
                setLoading(false);
            }
        }
        fetchUsuarios();
    }, []);

    if (loading) {
        return <div>Carregando usuários...</div>;
    }
    return (
        <div className="listar-usuarios">
            <h1>Lista de Usuários</h1>
            <ul>
                {usuarios.map((usuario) => (
                    <li key={usuario.id}>
                        {usuario.nome} <br /> {usuario.email} <br /> {usuario.telefone}
                    </li>
                ))}
            </ul>
        </div>
    );
}