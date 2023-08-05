import React from 'react'
import { useParams } from 'react-router-dom'

import { CToast } from 'components/atoms'
import { IProducts } from '../Dashboard/Dashboard.types'
import { getProductDetail } from './ProductDetail.network'

const useProductDetail = () => {
  const [detail, detailSet] = React.useState<IProducts | null>(null)

  const { productID } = useParams<{ productID: string }>()
  const { errToast } = CToast()

  const getDetailReq = async () => {
    const res = await getProductDetail(Number(productID))
    if (res?.status === 200 && res.data) {
      detailSet(res.data)
      return
    }
    errToast('An error has occured while fetching detail data')
  }

  React.useEffect(() => {
    getDetailReq()
  }, [productID])

  return { data: { detail }, method: {} }
}

export default useProductDetail
