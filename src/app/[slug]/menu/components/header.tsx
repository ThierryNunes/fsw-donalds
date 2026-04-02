"use client"
import { Restaurant } from "@prisma/client"
import { ChevronLeftIcon, ScrollTextIcon } from "lucide-react"
import Image from "next/image"
import { useParams, useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"

interface RestaurantHeaderProps {
  restaurant: Pick<Restaurant, "coverImageUrl" | "name">
}

const RestaurantHeader = ({ restaurant }: RestaurantHeaderProps) => {
  const { slug } = useParams<{ slug: string }>()
  const router = useRouter()

  const handleBackClick = () => {
    router.back()
  }

  const handleOrdersClick = () => {
    router.push(`/${slug}/orders`)
  }

  return (
    <div className="relative h-[250px] w-full">
      <Image
        className="object-cover"
        src={restaurant.coverImageUrl}
        alt={restaurant.name}
        fill
      />

      <Button
        size="icon"
        variant="secondary"
        className="absolute left-4 top-4 z-50 rounded-full"
        onClick={handleBackClick}
      >
        <ChevronLeftIcon />
      </Button>

      <Button
        size="icon"
        variant="secondary"
        className="absolute right-4 top-4 z-50 rounded-full"
        onClick={handleOrdersClick}
      >
        <ScrollTextIcon />
      </Button>
    </div>
  )
}

export default RestaurantHeader
