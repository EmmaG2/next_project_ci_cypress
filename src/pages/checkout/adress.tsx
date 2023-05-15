import {
  Box,
  Button,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material'

import { ShopLayout } from '@/components/layouts'

const AdressPage = () => {
  return (
    <ShopLayout
      title={'Dirección'}
      pageDescription={'Confirmar la dirección del destino'}
    >
      <Typography
        variant='h1'
        component='h1'
      >
        Direccion
      </Typography>

      <Grid
        sx={{ mt: 2 }}
        container
        spacing={2}
      >
        <Grid
          item
          xs={12}
          sm={6}
        >
          <TextField
            label='Nombre'
            variant='filled'
            fullWidth
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
        >
          <TextField
            label='Apellido'
            variant='filled'
            fullWidth
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
        >
          <TextField
            label='Direccion'
            variant='filled'
            fullWidth
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
        >
          <TextField
            label='Direccion 2'
            variant='filled'
            fullWidth
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
        >
          <TextField
            label='Codigo Postal'
            variant='filled'
            fullWidth
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
        >
          <FormControl fullWidth>
            <Select
              variant='filled'
              label='Pais'
              value={1}
            >
              <MenuItem value={1}>Mexico</MenuItem>
              <MenuItem value={2}>Honduras</MenuItem>
              <MenuItem value={3}>USA</MenuItem>
            </Select>
          </FormControl>
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
        >
          <TextField
            label='Ciudad'
            variant='filled'
            fullWidth
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
        >
          <TextField
            label='Telefono'
            variant='filled'
            fullWidth
          />
        </Grid>
      </Grid>

      <Box sx={{ mt: 3 }}>
        <Button
          color='secondary'
          className='circular-btn'
          size='large'
        >
          Revisar pedido
        </Button>
      </Box>
    </ShopLayout>
  )
}

export default AdressPage
