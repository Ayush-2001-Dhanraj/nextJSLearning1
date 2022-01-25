import Link from 'next/link'

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <h3>
        <Link href='/products'>
          <a>Products</a>
        </Link>
      </h3>
      <h3>
        <Link href='/users'>
          <a>Users</a>
        </Link>
      </h3>
    </>
  )
}
export default Home
