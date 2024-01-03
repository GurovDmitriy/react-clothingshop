import { IProduct } from "@/domain/Category/types/types"
import { ICartProduct } from "@/domain/Cart/types/types"

export function adapterAddToCart(product: IProduct): ICartProduct {
  return {
    id: product.id,
    name: product.caption,
    imageUrl: product.image,
    price: parseFloat(product.price),
    count: 1,
  }
}
