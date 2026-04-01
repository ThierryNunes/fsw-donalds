"use client"

import { Prisma } from "@prisma/client"
import { ChefHatIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react"
import Image from "next/image"
import { useContext, useState } from "react"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { formatCurrency } from "@/utils/constants"

import CartSheet from "../../components/cart-sheet"
import { CartContext } from "../../contexts/cart"

interface ProductDetailsProps {
  product: Prisma.ProductGetPayload<{
    include: {
      restaurant: {
        select: {
          name: true
          avatarImageUrl: true
          slug: true
        }
      }
      ingredients: true
    }
  }>
}

const ProductDetails = ({ product }: ProductDetailsProps) => {
  const { toggleCart, addProduct } = useContext(CartContext)
  const { restaurant } = product
  const { ingredients } = product

  const [quantity, setQuantity] = useState<number>(1)

  const handleDecreaseQuantity = () => {
    if (quantity === 1) {
      return
    }
    setQuantity((prev) => prev - 1)
  }

  const handleIncreaseQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  const handleAddToCart = () => {
    addProduct({
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
      quantity,
    })
    toggleCart()
  }

  return (
    <>
      <div className="relative z-50 mt-[-1.5rem] flex flex-auto flex-col overflow-hidden rounded-t-3xl p-5">
        <div className="flex-auto overflow-hidden">
          {/* RESTAURANT */}
          <div className="flex items-center gap-1.5">
            <Image
              src={restaurant.avatarImageUrl}
              alt={restaurant.name}
              width={16}
              height={16}
              className="rounded-full"
            />
            <p className="text-xs text-muted-foreground">{restaurant.name}</p>
          </div>

          <h2 className="mt-1 text-xl font-semibold">{product.name}</h2>

          {/* PRICE AND QUANTITY */}
          <div className="mt-3 flex items-center justify-between">
            <h3 className="text-lg font-semibold">
              {formatCurrency(product.price)}
            </h3>
            <div className="flex items-center gap-3 text-center">
              <Button
                variant="outline"
                className="h-8 w-8 rounded-xl"
                onClick={handleDecreaseQuantity}
                disabled={quantity === 1}
              >
                <ChevronLeftIcon />
              </Button>
              <p className="w-4">{quantity}</p>
              <Button
                variant="destructive"
                className="h-8 w-8 rounded-xl"
                onClick={handleIncreaseQuantity}
              >
                <ChevronRightIcon />
              </Button>
            </div>
          </div>

          <ScrollArea className="h-full">
            {/* ABOUT */}
            <div className="mt-6 space-y-3">
              <h4 className="font-semibold">Sobre</h4>
              <p className="text-sm text-muted-foreground">
                {product.description}
              </p>
            </div>

            {/* INGREDIENTS */}
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-1">
                <ChefHatIcon size={18} />
                <h4 className="font-semibold">Ingredientes</h4>
              </div>
              <ul className="list-disc px-5 text-sm text-muted-foreground">
                {ingredients.map((ingredient) => (
                  <li key={ingredient.id}>{ingredient.name}</li>
                ))}
              </ul>
            </div>
          </ScrollArea>
        </div>

        <Button className="w-full rounded-full" onClick={handleAddToCart}>
          Adicionar à sacola
        </Button>
      </div>

      <CartSheet />
    </>
  )
}

export default ProductDetails
