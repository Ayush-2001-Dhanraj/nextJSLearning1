import { useRouter } from 'next/router'

const ProductDetails = () => {
  const router = useRouter()
  const { productID, reviewID } = router.query

  return (
    <h1>
      Review {reviewID} of product {productID}
    </h1>
  )
}

export default ProductDetails
