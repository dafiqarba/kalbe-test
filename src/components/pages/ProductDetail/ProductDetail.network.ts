import axios from 'axios'

import { BASE_URL } from 'utils/constants'

export const getProductDetail = async (productID: number) => {
  try {
    const res = axios.get(`${BASE_URL}/products/${productID}`)
    return res
  } catch (error) {
    if (error instanceof Error) {
      return
    }
  }
}
