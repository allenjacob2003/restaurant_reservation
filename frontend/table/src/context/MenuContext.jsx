import React, { useState } from "react"; 
import { product } from '../assets/assets'
import { createContext } from "react";


export const MenuContext = createContext()

const MenuContextProvider = ({ children }) => {
    const[products, setProducts] = useState(product)

    return(
        <MenuContext.Provider value={{ products}}>
            {children}
        </MenuContext.Provider>
    )
}

export default MenuContextProvider