import { IProduct } from '@/interfaces'
import { CurrencyFormatter } from '@/utilities'
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Link,
  Typography,
} from '@mui/material'

import NextLink from 'next/link'
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

  const formatter: CurrencyFormatter = new CurrencyFormatter({})

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
        <NextLink
          href={'/product/slug'}
          passHref
          prefetch={false}
          legacyBehavior
        >
          <Link>
            <CardActionArea>
              <CardMedia
                component='img'
                className='fadeIn'
                image={productImage}
                alt={product.title}
              />
            </CardActionArea>
          </Link>
        </NextLink>
      </Card>

      <Box
        sx={{ mt: 1 }}
        className='fadeIn'
      >
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={500}>
          {formatter.formatCurrency(product.price)}
        </Typography>
      </Box>
    </Grid>
  )
}
