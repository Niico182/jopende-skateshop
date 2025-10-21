import { Link } from "react-router-dom";
import { Item } from "../Item/Item";
import "./ItemList.css";

export const ItemList = ({ list }) => {
  return (
    <>
      {list.length ? (
        <div className="item-list-container">
          {list.map((prod) => (
            <Link className="product-link" to={`/detail/${prod.id}`} key={prod.id}>
              <Item {...prod} />
            </Link>
          ))}
        </div>
      ) : (
        <p>No hay productos</p>
      )}
    </>
  );
};
