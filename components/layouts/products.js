import Grid from '@mui/material/Grid'
import Link from 'next/link'

export default function ProductsListLayout ({ children }) {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <h1>Products available: </h1>
          <h3>
            <Link href='/products/1'>
              <a>Product 1</a>
            </Link>
          </h3>
          <h3>
            <Link href='/products/2'>
              <a>Product 2</a>
            </Link>
          </h3>
          <h3>
            <Link href='/products/3' replace>
              <a>Product 3</a>
            </Link>
          </h3>
        </Grid>
        <Grid item xs={6}>
          {children}
        </Grid>
      </Grid>
    </>
  )
}
