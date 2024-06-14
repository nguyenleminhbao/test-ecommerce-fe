export interface IUser {
  id?: string
  name: string
  firstName: string
  lastName: string
  phoneNumber: string
  addresses: IAddress[]
  avatar: string
}

export interface IAddress {
  streetAddress: string
  city: string
}
