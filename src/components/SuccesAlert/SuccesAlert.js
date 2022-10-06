import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function SueccesAlert() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      <Alert severity="success">Todo en orden, puedes ir a checar el producto!</Alert>
    </Stack>
  );
}
