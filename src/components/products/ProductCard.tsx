import { IProduct } from '@/interfaces'
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material'
import { FC, useMemo, useState } from 'react'

interface Props {
  product: IProduct
}

export const ProductCard: FC<Props> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false)

  const productImage = useMemo(() => {
    return isHovered
      ? `products/${product.images[1]}`
      : `products/${product.images[0]}`
  }, [isHovered, product.images])

  return (
    <Grid
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      xs={12}
      sm={6}
      md={4}
      item
    >
      <Card>
        <CardActionArea>
          <CardMedia
            component='img'
            className='fadeIn'
            image={productImage}
            alt={product.title}
            onLoad={() => console.log('se cargo')}
          />
        </CardActionArea>
      </Card>

      <Box
        sx={{ mt: 1 }}
        className='fadeIn'
      >
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={500}>${product.price}.00</Typography>
      </Box>
    </Grid>
  )
}
