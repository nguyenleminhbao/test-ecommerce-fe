export interface IUser {
  id?: string
  name: string
  firstName: string
  lastName: string
  phoneNumber: string
  addresses: {
    streetAddress: string
    city: string
  }[]
  avatar: string
}
