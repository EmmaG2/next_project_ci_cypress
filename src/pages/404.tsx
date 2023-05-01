import { ShopLayout } from '@/components/layouts'
import { Box, Typography } from '@mui/material'

const Custom404 = () => {
  return (
    <ShopLayout
      title={'Page not found'}
      pageDescription={'Aquí no hay nada que mostrar'}
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
        <Typography
          variant='h1'
          component={'h1'}
          fontSize={70}
          fontWeight={150}
        >
          404 |
        </Typography>
        <Typography marginLeft={1}>
          No encontramos ningún articulo en esta URL
        </Typography>
      </Box>
    </ShopLayout>
  )
}

export default Custom404
