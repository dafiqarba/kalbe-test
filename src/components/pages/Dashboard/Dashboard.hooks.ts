import React from 'react'
import { useForm } from 'react-hook-form'
import { number, object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import {
  IProducts,
  IProductRHF,
  IProductList,
  IUpdateProductData,
} from './Dashboard.types'
import {
  getProducts,
  createProduct,
  deleteProduct,
  updateProduct,
} from './Dashboard.network'
import { CToast } from 'components/atoms'

const initModal = {
  add: false,
  update: false,
  delete: false,
}

const initSelectedItem = {
  iD: 0,
  name: '',
}

const initProductRHF: IProductRHF = {
  img: '',
  name: '',
  price: '',
  quantity: 0,
}

const useDashboard = () => {
  const [modal, modalSet] = React.useState(initModal)
  const [selectedItem, selectedItemSet] = React.useState(initSelectedItem)
  const [productList, productListSet] = React.useState<IProductList>(null)

  const { errToast, successToast } = CToast()

  const updateValidation = object().shape({
    img: string().required(),
    name: string().required(),
    price: string().required(),
    quantity: number().required().min(0),
  })

  const {
    reset: resetUpdate,
    control: controlUpdate,
    setValue: setValueUpdate,
    formState: { errors: errUpdate },
    handleSubmit: handleSubmitUpdate,
  } = useForm({
    reValidateMode: 'onChange',
    defaultValues: initProductRHF,
    resolver: yupResolver(updateValidation),
  })

  const getProductsReq = async () => {
    const res = await getProducts()
    if (res?.status === 200 && res.data) {
      productListSet(res.data)
      return
    }
    errToast('An error has occured while fetching products')
  }

  const handleUpdateProduct = (currentValue: IProducts) => {
    selectedItemSet({ iD: currentValue.id, name: currentValue.name })

    setValueUpdate('img', currentValue.img)
    setValueUpdate('name', currentValue.name)
    setValueUpdate('price', currentValue.price)
    setValueUpdate('quantity', currentValue.quantity)

    modalSet((prev) => ({ ...prev, update: true }))
  }

  const handleDeleteProduct = (currentValue: IProducts) => {
    selectedItemSet({ iD: currentValue.id, name: currentValue.name })
    modalSet((prev) => ({ ...prev, delete: true }))
  }

  const handleCreateProduct = () => modalSet((prev) => ({ ...prev, add: true }))

  const handleCloseModal = () => {
    modalSet(initModal)
    selectedItemSet(initSelectedItem)
    resetUpdate()
  }

  const handleSubmitUpdateRHF = async (submitted: IProductRHF) => {
    const { img, name, price, quantity } = submitted
    const reqBody: IUpdateProductData = {
      img,
      name,
      price,
      quantity,
    }
    const res = await updateProduct(selectedItem.iD, reqBody)
    if (res?.status === 200 && res.data) {
      successToast('Product Updated')
      handleCloseModal()
      return
    }
    errToast('An error has occured while updating product')
  }

  const handleSubmitCreateRHF = async (submitted: IProductRHF) => {
    const { img, name, price, quantity } = submitted
    const reqBody: IUpdateProductData = {
      img,
      name,
      price,
      quantity,
    }
    const res = await createProduct(reqBody)
    if (res?.status === 201 && res.data) {
      successToast('Product Created!')
      handleCloseModal()
      return
    }
    errToast('An error has occured while creating product')
  }

  const handleSubmitDeleteProduct = async () => {
    const res = await deleteProduct(selectedItem.iD)
    if (res?.status === 200 && res.data) {
      successToast('Product Deleted')
      handleCloseModal()
      return
    }
    errToast('An error has occured while deleting product')
  }

  React.useEffect(() => {
    getProductsReq()
  }, [selectedItem.iD, modal.add])

  return {
    data: { modal, productList, controlUpdate, errUpdate, selectedItem },
    method: {
      handleCloseModal,
      handleSubmitUpdate,
      handleUpdateProduct,
      handleDeleteProduct,
      handleCreateProduct,
      handleSubmitCreateRHF,
      handleSubmitUpdateRHF,
      handleSubmitDeleteProduct,
    },
  }
}

export default useDashboard
