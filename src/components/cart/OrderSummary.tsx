import { Grid, Typography } from '@mui/material'

export const OrderSummary = () => {
  return (
    <Grid
      container
      spacing={1}
    >
      <Grid
        item
        xs={6}
      >
        <Typography>No. Productos:</Typography>
      </Grid>

      <Grid
        item
        xs={6}
        display='flex'
        justifyContent={'end'}
      >
        <Typography sx={{ color: 'primary.main' }}>
          <strong>3</strong>
        </Typography>
      </Grid>

      <Grid
        item
        xs={6}
      >
        <Typography>Subtotal:</Typography>
      </Grid>

      <Grid
        item
        xs={6}
        display='flex'
        justifyContent={'end'}
      >
        <Typography sx={{ color: 'primary.main' }}>
          <strong>$165.32</strong>
        </Typography>
      </Grid>

      <Grid
        item
        xs={6}
      >
        <Typography>Descuento:</Typography>
      </Grid>

      <Grid
        item
        xs={6}
        display='flex'
        justifyContent={'end'}
      >
        <Typography sx={{ color: 'secondary.main' }}>
          <strong>$0.00</strong>
        </Typography>
      </Grid>

      <Grid
        item
        xs={6}
      >
        <Typography>IVA:</Typography>
      </Grid>

      <Grid
        item
        xs={6}
        display='flex'
        justifyContent={'end'}
      >
        <Typography sx={{ color: 'primary.main' }}>
          <strong>$32.32</strong>
        </Typography>
      </Grid>

      <Grid
        item
        xs={6}
      >
        <Typography sx={{ mt: 1 }}>
          <strong>Total:</strong>
        </Typography>
      </Grid>

      <Grid
        item
        xs={6}
        display='flex'
        justifyContent={'end'}
      >
        <Typography sx={{ color: 'secondary.main', mt: 1 }}>
          <strong>${165.32 + 32.32}</strong>
        </Typography>
      </Grid>
    </Grid>
  )
}
