// src\components\Header\index.js
import { Link } from "react-router-dom";
import './style.css';

function Header() {
    return (
        <header className="header">
            <div className="logo"> Gerenciamento de Usuário</div>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/cadastro'>Cadastrar</Link>
                <Link to='/listar'>Listar Usuário</Link>
                </nav>
        </header>
    );
}

export default Header;                                         