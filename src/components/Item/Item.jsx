import "./Item.css"

export const Item = ({name, price, description, imageUrl, children}) => {
    return(
        <article className="item-card">
            <img src={imageUrl} alt={name} />
            <h2>{name}</h2>
            <p className="price">Valor: ${price}</p>
            <p className="description">{description}</p>
            {children}
        </article>
    )
}
