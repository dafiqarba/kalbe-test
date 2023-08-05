import axios from 'axios'

import { BASE_URL } from 'utils/constants'
import { IUpdateProductData } from './Dashboard.types'

export const getProducts = async () => {
  try {
    const res = axios.get(BASE_URL + '/products')
    return res
  } catch (error) {
    if (error instanceof Error) {
      return
    }
  }
}

export const updateProduct = async (
  productID: number,
  reqBody: IUpdateProductData
) => {
  try {
    const res = axios.put(`${BASE_URL}/products/${productID}`, {
      ...reqBody,
    })
    return res
  } catch (error) {
    if (error instanceof Error) {
      return
    }
  }
}

export const deleteProduct = async (productID: number) => {
  try {
    const res = axios.delete(`${BASE_URL}/products/${productID}`)
    return res
  } catch (error) {
    if (error instanceof Error) {
      return
    }
  }
}

export const createProduct = async (reqBody: IUpdateProductData) => {
  try {
    const res = axios.post(`${BASE_URL}/products/`, {
      ...reqBody,
    })
    return res
  } catch (error) {
    if (error instanceof Error) {
      return
    }
  }
}
