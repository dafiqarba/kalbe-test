import { Control, FieldErrors, UseFormHandleSubmit } from 'react-hook-form'

// --------------------------------------------------- Data
export type IProducts = {
  id: number
  name: string
  quantity: number
  price: string
  img: string
}

export type IProductList = IProducts[] | null | undefined

export type IProductRHF = {
  img: string
  name: string
  price: string
  quantity: number
}

export type IUpdateProductData = {
  img: string
  name: string
  price: string
  quantity: number
}
// --------------------------------------------------- Data
// --------------------------------------------------- Components

export type IEditModalProps = {
  isEdit: boolean
  isOpen: boolean
  onClose: () => void
  form: {
    control: Control<IProductRHF>
    onSubmitCreate: (submitted: IProductRHF) => void
    onSubmitUpdate: (submitted: IProductRHF) => void
    onSubmitRHF: UseFormHandleSubmit<IProductRHF>
    err: FieldErrors<IProductRHF>
  }
}

export type IDeleteModalProps = {
  isOpen: boolean
  onClose: () => void
  onDelete: () => void
  itemToBeDeleted: string
}

// --------------------------------------------------- Components
