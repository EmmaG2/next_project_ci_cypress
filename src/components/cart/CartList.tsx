import { initialData } from '@/database/products'
import {
  Box,
  Button,
  CardActionArea,
  CardMedia,
  Grid,
  Link,
  Typography,
} from '@mui/material'
import NextLink from 'next/link'
import { ItemCounter } from '../ui'
import { FC } from 'react'
import { CurrencyFormatter } from '@/utilities'

const productsInCart = [
  initialData.products[0],
  initialData.products[6],
  initialData.products[2],
]

interface Props {
  editable?: boolean
}

export const CartList: FC<Props> = ({ editable = false }) => {
  const formatter: CurrencyFormatter = new CurrencyFormatter({})

  return (
    <>
      {productsInCart.map((product, i) => (
        <Grid
          container
          spacing={2}
          sx={{ mb: 1, pr: 2 }}
          key={i}
        >
          <Grid
            item
            xs={3}
          >
            {/* TODO: Llevar a la pagina del producto */}
            <NextLink
              href={'/product/slug'}
              passHref
              legacyBehavior
            >
              <Link>
                <CardActionArea>
                  <CardMedia
                    component='img'
                    image={`/products/${product.images[0]}`}
                    sx={{ borderRadius: '5px' }}
                  />
                </CardActionArea>
              </Link>
            </NextLink>
          </Grid>

          <Grid
            item
            xs={7}
          >
            <Box
              display={'flex'}
              flexDirection={'column'}
            >
              <Typography variant='body2'>{product.title}</Typography>
              <Typography variant='body2'>
                Talla: <strong>M</strong>{' '}
              </Typography>

              {/* Esto deberia ser condicional */}

              {editable ? (
                <ItemCounter />
              ) : (
                <Typography variant='h4'>3 items</Typography>
              )}
            </Box>
          </Grid>

          <Grid
            item
            xs={2}
            display='flex'
            alignItems='center'
            flexDirection='column'
          >
            <Typography variant='subtitle2'>
              {formatter.formatCurrency(product.price)}
            </Typography>
            {editable ? (
              <Button
                variant='text'
                color='secondary'
              >
                Remover
              </Button>
            ) : null}
          </Grid>
        </Grid>
      ))}
    </>
  )
}
