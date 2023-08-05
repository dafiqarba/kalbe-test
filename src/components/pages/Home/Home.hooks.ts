import React from 'react'

import { CToast } from 'components/atoms'
import { IProductList } from '../Dashboard/Dashboard.types'
import { getProducts } from '../Dashboard/Dashboard.network'

const useHome = () => {
  const [productList, productListSet] = React.useState<IProductList>(null)

  const { errToast } = CToast()

  const getProductsReq = async () => {
    const res = await getProducts()
    if (res?.status === 200 && res.data) {
      productListSet(res.data)
      return
    }
    errToast('An error has occured while fetching products')
  }

  React.useEffect(() => {
    getProductsReq()
  }, [])

  return { data: { productList } }
}

export default useHome
