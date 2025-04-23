import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark p-3" style={{ backgroundColor: '#020100' }}>
      <div className="container">
        <Link className="navbar-brand" to="/">
          SkålKassen
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-6 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Hjem
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/cart">
                Cart
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/checkout">
                Check out
              </Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <FontAwesomeIcon icon={faShoppingCart} className="me-2" style={{ color: '#ca6009',fontSize: '1.5rem' }} />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;