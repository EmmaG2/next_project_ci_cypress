import { Inter } from 'next/font/google'
import { ShopLayout } from '@/components/layouts'
import { Typography } from '@mui/material'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <ShopLayout
      title='Tesla-Shop - Home'
      pageDescription='Encuentra los mejores productos de tesla aqui'
    >
      <Typography
        variant='h1'
        component='h1'
      >
        Home
      </Typography>
      <Typography
        variant='h2'
        component='h2'
        sx={{
          mb: 1,
        }}
      >
        Todos los productos
      </Typography>
    </ShopLayout>
  )
}
