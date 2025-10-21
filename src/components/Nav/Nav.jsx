import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext/useCartContext";

export const Nav = () => {
  const { getTotalItems } = useCartContext();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark w-100">
      <div className="container-fluid">
        
        {/* Logo o nombre */}
        <Link className="navbar-brand" to="/">SkateShop</Link>

        {/* Botón hamburguesa mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Items del menu */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/tablas">Tablas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/trucks">Trucks</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/ruedas">Ruedas</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/rulemanes">Rulemanes</Link>
            </li>
          </ul>

          {/* Carrito a la derecha */}
          <ul className="navbar-nav">
            <li className="nav-item position-relative">
              <Link className="nav-link" to="/cart">
                Carrito
                {getTotalItems() > 0 && (
                  <span
                    className="badge bg-danger rounded-pill ms-2"
                    style={{ fontSize: "0.75rem" }}
                  >
                    {getTotalItems()}
                  </span>
                )}
              </Link>
            </li>
          </ul>

        </div>
      </div>
    </nav>
  );
};
