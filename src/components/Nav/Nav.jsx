import { Link } from "react-router-dom";

export const Nav = () => {
    return (
    <nav>
        <ul>
            <li>
                <Link to={"/"}>Home</Link>
            </li>
            <li>
                <Link to={"/category/tablas"}>Tablas</Link>
            </li>
            <li>
                <Link to={"/category/trucks"}>Trucks</Link>
            </li>
            <li>
                <Link to={"/category/ruedas"}>Ruedas</Link>
            </li>
            <li>
                <Link to={"/category/rulemanes"}>Rulemanes</Link>
            </li>
        </ul>
    </nav>
    );
};