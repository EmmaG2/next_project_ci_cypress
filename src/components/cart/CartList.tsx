import { initialData } from '@/database/products'
import { Typography } from '@mui/material'

const productsInCart = [
  initialData.products[0],
  initialData.products[6],
  initialData.products[2],
]

export const CartList = () => {
  return (
    <>
      {productsInCart.map((product, i) => (
        <Typography key={i}>{product.title}</Typography>
      ))}
    </>
  )
}
