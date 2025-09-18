// src\Header\index.jsx
import './style.css'
import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom';

function Header () {
    return (
        <header className= 'header'>
            <div className='header__wrap'>
            <Link to='/' className='brand'>
                <img src={logo} alt='Logo do Jogo'/>
                <span>Contabilidade Dendezeiros</span>
            </Link>

            <nav className="nav">
                <NavLink to='/servicos' className={({isActive}) =>isActive ? 'link active' : 'link' }>
                    Serviços
                </NavLink>
                <NavLink to='/sobre-nos' className={({isActive}) =>isActive ? 'link active' : 'link' }>
                    Sobre Nós
                </NavLink>
                <NavLink to='/fale-conosco' className={({isActive}) =>isActive ? 'link active' : 'link' }>
                    Fale Conosco
                </NavLink>
            </nav>
        </div>
            </header>
        
    )
}

export default Header;