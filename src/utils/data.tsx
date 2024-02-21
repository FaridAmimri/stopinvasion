/** @format */

import { MenuType, HeroType, ServiceType } from '../types/types'

export const menu: MenuType = [
  { id: 1, name: 'Accueil', link: '/accueil' },
  { id: 2, name: 'Services', link: '/services' },
  { id: 3, name: 'Notre Entreprise', link: '/notreentreprise' },
  { id: 4, name: 'Contact', link: '/contact' }
]

export const hero: HeroType = [
  {
    id: 1,
    title: 'cafard',
    img: '/cafard.jpg'
  },
  {
    id: 2,
    title: 'rat',
    img: '/rat.jpg'
  },
  {
    id: 3,
    title: 'punaise',
    img: '/punaise.jpg'
  }
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
