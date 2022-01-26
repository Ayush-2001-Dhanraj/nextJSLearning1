import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Link from 'next/link'

export default function Header () {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            <Link href='/' passHref>
              Ayush Dhanraj
            </Link>
          </Typography>
          <Link href='/' passHref>
            <Button color='inherit'>Home</Button>
          </Link>
          <Link href='/products' passHref>
            <Button color='inherit'>Products</Button>
          </Link>
          <Link href='/users' passHref>
            <Button color='inherit'>Users</Button>
          </Link>
        </Toolbar>
      </AppBar>
    </Box>
  )
}
