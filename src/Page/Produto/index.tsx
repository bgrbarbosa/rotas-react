import { NavLink, Outlet, Route } from 'react-router-dom';
import './style.css'

export default function Produto() {
    return (
        <div className="container">
            <div id="nav" className='container-product'>
                <nav className="nav_item">
                    <NavLink to="computers" className={({isActive}) => isActive ? "produtcMenuItem produtcMenu-active": "produtcMenuItem"}>
                        Computadores
                    </NavLink>

                    <NavLink to="eletronics" className={({isActive}) => isActive ? "produtcMenuItem produtcMenu-active": "produtcMenuItem"}>
                        Eletrônicos
                    </NavLink>

                    <NavLink to="books" className={({isActive}) => isActive ? "produtcMenuItem produtcMenu-active": "produtcMenuItem"}>
                        Livros
                    </NavLink>
                </nav>
            </div> 
            <div>
                <Outlet/>
            </div>
        </div>
    );
}