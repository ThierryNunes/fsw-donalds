"use client"

import { Product } from "@prisma/client"
import { createContext, ReactNode, useState } from "react"

// Como nao tenho quantity de produtos, vou criar uma interface nova para o carrinho, onde eu consigo controlar a quantidade de cada produto
interface CartProduct extends Pick<
  Product,
  "id" | "name" | "price" | "imageUrl"
> {
  quantity: number
}

export interface ICartContext {
  isOpen: boolean
  products: CartProduct[]
  toggleCart: () => void
}

export const CartContext = createContext<ICartContext>({
  isOpen: false,
  products: [],
  toggleCart: () => {},
})

export const CartProvider = ({ children }: { children: ReactNode }) => {
  // eslint-disable-next-line no-unused-vars
  const [products, setProducts] = useState<CartProduct[]>([])
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const toggleCart = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <CartContext.Provider
      value={{
        isOpen,
        products,
        toggleCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
