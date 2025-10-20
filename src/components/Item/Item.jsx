export const Item = ({name, price, description, imageUrl, children}) => {
    return(
        <article>
            <img src={imageUrl} alt={name} />
            <h2>{name}</h2>
            <p>Valor: ${price}</p>
            <p>Descripcion: {description}</p>
            {children}
        </article>
    )
}