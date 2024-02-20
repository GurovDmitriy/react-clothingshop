import { ICartProduct } from "@/entities/Cart"
import { IProduct } from "@/entities/Product"

export function adapterAddToCart<P>(product: IProduct): ICartProduct {
  return {
    id: product.id,
    name: product.caption,
    imageUrl: product.image,
    price: parseFloat(product.price),
    count: 1,
  }
}
