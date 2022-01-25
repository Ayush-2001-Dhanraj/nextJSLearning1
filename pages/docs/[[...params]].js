import { useRouter } from 'next/router'

const Docs = () => {
  const { params = [] } = useRouter().query

  if (params.length === 1) {
    return <h1>Docs page for {params[0]}</h1>
  }

  if (params.length === 2) {
    return (
      <h1>
        Docs page for {params[0]} {params[1]}
      </h1>
    )
  }

  return <h1>Docs page</h1>
}

export default Docs
