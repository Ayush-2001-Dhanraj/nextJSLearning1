import Link from 'next/link'

const Products = () => {
  return (
    <>
      <h1>Products Page</h1>
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
    </>
  )
}
export default Products
