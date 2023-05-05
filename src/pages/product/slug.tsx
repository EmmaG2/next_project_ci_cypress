import { ShopLayout } from '@/components/layouts'
import { ProductSlideshow } from '@/components/products'
import { initialData } from '@/database/products'
import { Box, Button, Chip, Grid, Typography } from '@mui/material'

const product = initialData.products[0]

const ProductPage = () => {
  return (
    <ShopLayout
      title={product.title}
      pageDescription={product.description}
    >
      <Grid
        container
        spacing={3}
      >
        <Grid
          item
          xs={12}
          sm={7}
        >
          <ProductSlideshow images={product.images} />
        </Grid>

        <Grid
          item
          xs={12}
          sm={5}
        >
          <Box
            display={'fle'}
            flexDirection={'column'}
          >
            {/* titulos */}
            <Typography
              variant='h1'
              component={'h1'}
            >
              {product.title}
            </Typography>
            <Typography
              variant='h2'
              component={'h2'}
            >
              ${product.price}.00
            </Typography>

            {/* Cantidad */}

            <Box sx={{ my: 2 }}>
              <Typography variant='subtitle2'>Cantidad</Typography>
              {/* Item counter */}
            </Box>

            {/* Agregar al carrito */}

            <Button
              sx={{
                width: '100%',
              }}
              color='secondary'
              className='circular-btn'
            >
              Agregar al carrito
            </Button>

            {/* <Chip
              label='No hay disponibles'
              color='error'
              variant='outlined'
              sx={{
                width: '100%',
              }}
            /> */}

            <Box sx={{ mt: 3 }}>
              <Typography variant='subtitle2'>Descripcion</Typography>
              <Typography variant='body2'>{product.description}</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default ProductPage
