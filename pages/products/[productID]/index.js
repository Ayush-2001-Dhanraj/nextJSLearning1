import ProductsListLayout from '../../../components/layouts/products'
import { useRouter } from 'next/router'

const ProductDetails = () => {
  const router = useRouter()
  const productID = router.query.productID

  return <h1>Details of product {productID}</h1>
}

ProductDetails.layout = ProductsListLayout

export default ProductDetails
