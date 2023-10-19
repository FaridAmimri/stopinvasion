/** @format */

import { MenuType, ServiceType } from '../types/types'

export const menu: MenuType = [
  { id: 1, name: 'Home', link: '/' },
  { id: 2, name: 'Services', link: '/services' },
  { id: 3, name: 'À Propos', link: '/about' },
  { id: 4, name: 'Contact', link: '/contact' }
]

export const service: ServiceType = [
  {
    id: 1,
    img: '/house.png',
    title: 'Maison Personnelle',
    desc: 'Environnement propre, sûr et sain pour votre maison'
  },
  {
    id: 2,
    img: '/office.png',
    title: 'Immobiler de Bureau',
    desc: 'Propreté de vos bureaux, salles de réunion et espaces communs'
  },
  {
    id: 3,
    img: '/vehicle.png',
    title: 'Véhicule de Transport',
    desc: 'Nettoyage et de désinfection intérieure et extérieure'
  }
]
