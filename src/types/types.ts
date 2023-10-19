/** @format */

export type MenuType = {
  id: number
  name: string
  link: string
}[]

export type MenuItemType = {
  id: number
  name: string
  link: string
}

export type ServiceType = {
  id: number
  img: string
  title: string
  desc: string
}[]

export type ServiceItemType = {
  id: number
  img: string
  title: string
  desc: string
}

export type FormType = {
  name: string
  subject: string
  email: string
  message: string
}

export type RequestType = {
  name: string
  email: string
  service: string
}

