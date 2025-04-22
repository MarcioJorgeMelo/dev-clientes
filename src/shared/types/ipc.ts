export interface Customer {
  _id: string
  _rev?: string
  name: string
  email: string
  role: string
  status: boolean
  address?: string
  phone?: string
}

export interface newCustomer {
  name: string
  email: string
  role: string
  status: boolean
  address?: string
  phone?: string
}
