import { CartContext } from "./CartContext"

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState()

    const exist = (id) => {
        const existe = cart.some(p => p.id === id)
        return exist;  

    };

    const addItem = (item) => {
        if(exist(item.id)){
            alert("El producto ya esta cargado en el carrito");
            return;
        }
        setCart([...cart, item]) ;
        alert(`${item.name} agrega3`)
    };

    const clearCart = () => {
        setCart([])
    };

    const getTotalItems = () => {
        if (cart.length) {
            return cart.length;
        }
    };

    const values = {
        cart, addItem, clearCart, getTotalItems
    };

    return(
        <CartContext.Provider value={{}}>{children}</CartContext.Provider>
    );
};