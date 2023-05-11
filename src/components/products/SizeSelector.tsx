import { Box, Button, Typography } from '@mui/material'
import { FC } from 'react'

import { ISize } from '@/interfaces'

interface Props {
  selectedSize?: ISize
  sizes: ISize[]
}

export const SizeSelector: FC<Props> = ({ selectedSize, sizes }) => {
  return (
    <Box>
      {sizes.map((size, i) => (
        <Button
          size={'small'}
          key={i}
          variant={selectedSize === size ? 'outlined' : 'contained'}
          color={selectedSize === size ? 'secondary' : 'info'}
        >
          {size}
        </Button>
      ))}
      <Typography>Selected Size: {selectedSize}</Typography>
    </Box>
  )
}
