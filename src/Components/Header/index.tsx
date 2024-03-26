import { NavLink } from 'react-router-dom';
import './style.css'

export default function Header() {
    return (
        <header>
            <div className='container header-container '>
                <nav className="navbar">
                    <NavLink to="/home" className={({isActive}) => isActive ? "menuitem menu-active": "menuitem"}>
                        Início
                    </NavLink>
                    <NavLink to="/produto" className={({isActive}) => isActive ? "menuitem menu-active": "menuitem"}>
                        Produtos
                    </NavLink>
                    <NavLink to="/sobre" className={({isActive}) => isActive ? "menuitem menu-active": "menuitem"}>
                        Sobre nós
                    </NavLink>
                </nav>
                <NavLink to="/home" className='menuitem'>
                    <i className="fa fa-home icon" />
                </NavLink>
            </div>
        </header>
    );
}