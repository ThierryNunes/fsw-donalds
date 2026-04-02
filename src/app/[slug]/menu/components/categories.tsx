"use client"

import { Prisma } from "@prisma/client"
import { ClockIcon, StarIcon } from "lucide-react"
import Image from "next/image"
import { useContext, useState } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { CartContext } from "@/contexts/cart"
import { formatCurrency } from "@/utils/constants"

import CartSheet from "./cart-sheet"
import Products from "./products"

interface RestaurantCategoriesProps {
  restaurant: Prisma.RestaurantGetPayload<{
    include: {
      menuCategories: {
        include: {
          products: true
        }
      }
    }
  }>
}

// This type is used to ensure that the selected category has the products included, which is necessary for rendering the products when a category is selected.
type MenuCategoriesWithProducts = Prisma.MenuCategoryGetPayload<{
  include: { products: true }
}>

const RestaurantCategories = ({ restaurant }: RestaurantCategoriesProps) => {
  const { products, total, totalQuantity, toggleCart } = useContext(CartContext)

  const [selectedCategory, setSelectedCategory] =
    useState<MenuCategoriesWithProducts>(restaurant.menuCategories[0])

  const handleCategoryClick = (category: MenuCategoriesWithProducts) => {
    setSelectedCategory(category)
  }

  const getCategoryButtonVariant = (category: MenuCategoriesWithProducts) => {
    return category.id === selectedCategory.id ? "default" : "secondary"
  }

  return (
    <div className="relative z-50 mt-[-1.5rem] rounded-t-3xl bg-white">
      <div className="p-5">
        <div className="flex items-center justify-between">
          <div className="flex gap-3">
            <Image
              src={restaurant.avatarImageUrl}
              alt={restaurant.name}
              width={45}
              height={45}
            />
            <div>
              <h2 className="text-lg font-semibold">{restaurant.name}</h2>
              <p className="text-xs opacity-55">{restaurant.description}</p>
            </div>
          </div>
          <div className="flex">
            <Badge className="gap-1" variant="outline">
              <StarIcon size={12} fill="hsl(42 100% 50%)" strokeWidth="0" />
              5.0
            </Badge>
          </div>
        </div>
        <div className="mt-3 flex items-center gap-1 text-xs text-green-500">
          <ClockIcon size={12} />
          <p>Aberto!</p>
        </div>
      </div>

      <ScrollArea className="w-full">
        <div className="flex w-max space-x-4 p-4 pt-0">
          {restaurant.menuCategories.map((category) => (
            <Button
              key={category.id}
              variant={getCategoryButtonVariant(category)}
              size="sm"
              className="rounded-full"
              onClick={() => handleCategoryClick(category)}
            >
              {category.name}
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="bg-transparent" />
      </ScrollArea>

      <h3 className="px-5 pt-2 text-lg font-semibold">
        {selectedCategory.name}
      </h3>
      <Products products={selectedCategory.products} />
      {products.length > 0 && (
        <div className="fixed bottom-0 left-0 right-0 flex w-full items-center justify-between border-t bg-white px-5 py-3">
          {/* LEFT */}
          <div>
            <p className="text-xs text-muted-foreground">Total dos pedidos</p>
            <p className="text-sm font-semibold">
              {formatCurrency(total)}{" "}
              <span className="text-xs font-normal text-muted-foreground">
                / {totalQuantity} {totalQuantity > 1 ? "itens" : "item"}
              </span>
            </p>
          </div>

          <Button variant="default" onClick={toggleCart}>
            Ver Sacola
          </Button>
          <CartSheet />
        </div>
      )}
    </div>
  )
}

export default RestaurantCategories
