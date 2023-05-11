import NextLink from 'next/link'

import { ShopLayout } from '@/components/layouts'
import { RemoveShoppingCartOutlined } from '@mui/icons-material'
import { Box, Link, Typography } from '@mui/material'

const EmptyPage = () => {
  return (
    <ShopLayout
      title='Carrito vacío'
      pageDescription='No hay artículos en el carrito de compras.'
    >
      <Box
        display={'flex'}
        sx={{
          flexDirection: {
            xs: 'column',
            sm: 'row',
          },
          textAlign: 'center',
        }}
        justifyContent={'center'}
        alignItems={'center'}
        height={'calc(100vh - 200px)'}
      >
        <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
        <Box
          display={'flex'}
          flexDirection={'column'}
          alignItems={'center'}
          justifyContent={'center'}
          sx={{
            ml: 2,
          }}
        >
          <Typography
            sx={{
              mt: {
                xs: 2,
                sm: 0,
              },
            }}
          >
            Su carrito está vacío
          </Typography>
          <NextLink
            href={'/'}
            passHref
            legacyBehavior
          >
            <Link
              typography={'h4'}
              color={'secondary'}
            >
              Regresar
            </Link>
          </NextLink>
        </Box>
      </Box>
    </ShopLayout>
  )
}

export default EmptyPage
