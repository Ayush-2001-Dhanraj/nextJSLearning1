import { Box } from '@mui/material'
import Header from '../header'
import Container from '@mui/material/Container'

export default function MainLayout ({ children }) {
  return (
    <>
      <Header />
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <Container maxWidth='lg'>{children}</Container>
      </Box>
    </>
  )
}
