import { Link } from 'react-router';
import cartIcon from '../../assets/images/cart.svg'
import './styles.css'
export default function HeaderClient() {

    return (
        <header className="dsc-header-client">
            <nav className="dsc-container">
                <Link to="/" className="dsc-link">
                    <h1>DSCommerce</h1>
                </Link>
                
                <div className="dsc-navbar-right">
                    <div className="dsc-menu-items-container">
                        <div className="dsc-menu-item">
                            <Link to="/cart" className="dsc-link">
                                 <img src={cartIcon} alt="Carrinho" />
                            </Link>
                        </div>
                    </div>
                    <Link to="/login" className="dsc-link"> 
                        Entrar
                    </Link>
                </div>
            </nav>
        </header>
    );
}