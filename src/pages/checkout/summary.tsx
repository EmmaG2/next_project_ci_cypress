import { CartList, OrderSummary } from '@/components/cart'
import { ShopLayout } from '@/components/layouts'
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from '@mui/material'

const SummaryPage = () => {
  return (
    <ShopLayout
      title='Resumen de orden'
      pageDescription='Resumen de la orden'
    >
      <Typography
        variant='h1'
        component='h1'
        sx={{ mb: 2 }}
      >
        Resumen de la orden
      </Typography>

      <Grid container>
        <Grid
          item
          xs={12}
          sm={7}
        >
          <CartList editable={true} />
        </Grid>

        <Grid
          item
          xs={12}
          sm={5}
        >
          <Card className='summary-card'>
            <CardContent>
              <Typography variant='h2'>Orden</Typography>
              <Divider sx={{ my: 1 }} />

              <OrderSummary />

              <Box sx={{ mt: 3 }}>
                <Button
                  color='secondary'
                  className='circular-btn'
                >
                  Checkout
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ShopLayout>
  )
}

export default SummaryPage
