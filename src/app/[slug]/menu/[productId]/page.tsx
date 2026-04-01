import { notFound } from "next/navigation"

import { db } from "@/lib/prisma"

import ProductDetails from "./components/product-detail"
import ProductHeader from "./components/products-header"

interface ProductPageProps {
  params: Promise<{ slug: string; productId: string }>
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { slug, productId } = await params

  const products = await db.product.findUnique({
    where: {
      id: productId,
    },
    include: {
      restaurant: {
        select: {
          name: true,
          avatarImageUrl: true,
          slug: true,
        },
      },
    },
  })

  if (!products) {
    return notFound()
  }

  if (products.restaurant.slug.toUpperCase() !== slug.toUpperCase()) {
    return notFound()
  }

  return (
    <div className="flex h-full flex-col">
      <ProductHeader product={products} />
      <ProductDetails product={products} />
    </div>
  )
}

export default ProductPage
