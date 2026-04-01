import { useContext } from "react"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { formatCurrency } from "@/utils/constants"

import { CartContext } from "../contexts/cart"

const CartSheet = () => {
  const { isOpen, toggleCart, products } = useContext(CartContext)

  return (
    <Sheet open={isOpen} onOpenChange={toggleCart}>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Produto adicionado à sacola</SheetTitle>
          <SheetDescription>Descricao</SheetDescription>
        </SheetHeader>
        {products.map((product) => (
          <div key={product.id}>
            {product.name} - {product.quantity} x{" "}
            {formatCurrency(product.price)}
          </div>
        ))}
      </SheetContent>
    </Sheet>
  )
}

export default CartSheet
