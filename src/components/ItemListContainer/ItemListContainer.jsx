import { useEffect } from "react"
import { useState } from "react"
import { ItemList } from "../ItemList/ItemList"


export const ItemListContainer = () => {
const [products, setProducts] = useState([])

useEffect(() => {
    fetch("/data/products.json")
    .then((res)=> {
        if(!res.ok){
            throw new Error("No se pudo encontrar ningun producto")
        }
        return res.json();
    })
    .then((data)=> {
        setProducts(data)
    })
    .catch((err)=> {
        console.error(err);
        
    });
}, [])

    return (
        <section>
            <h1>Bienvenido</h1>
            <ItemList list={products}/>
        </section>
    ); 
};