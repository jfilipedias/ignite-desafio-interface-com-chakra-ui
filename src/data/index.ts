interface Continent {
  id: number;
  name: string;
  label: string;
  image: string;
  url: string;
}

interface TravelType {
  id: number;
  label: string;
  image: string;
}

export const continents: Continent[] = [
  {
    id: 1,
    name: 'Europa',
    label: 'O continente mais antigo',
    image:
      'https://images.unsplash.com/photo-1473951574080-01fe45ec8643?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=904&q=80',
    url: '/continent/europa',
  },
  {
    id: 2,
    name: 'América do Norte',
    label: 'O continente mais antigo',
    image:
      'https://images.unsplash.com/photo-1483653364400-eedcfb9f1f88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    url: '/continent/europa',
  },
  {
    id: 3,
    name: 'América do Sul',
    label: 'O continente mais antigo',
    image:
      'https://images.unsplash.com/photo-1568805746970-0bbae56ab18b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    url: '/continent/europa',
  },
  {
    id: 4,
    name: 'África',
    label: 'O continente mais antigo',
    image:
      'https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80',
    url: '/continent/europa',
  },
  {
    id: 5,
    name: 'Ásia',
    label: 'O continente mais antigo',
    image:
      'https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=892&q=80',
    url: '/continent/europa',
  },
  {
    id: 6,
    name: 'Oceania',
    label: 'O continente mais antigo',
    image:
      'https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1530&q=80',
    url: '/continent/europa',
  },
];

export const travelTypes: TravelType[] = [
  {
    id: 1,
    label: 'vida noturna',
    image: 'icons/cocktail.svg',
  },
  {
    id: 2,
    label: 'praia',
    image: 'icons/surf.svg',
  },
  {
    id: 3,
    label: 'moderno',
    image: 'icons/building.svg',
  },
  {
    id: 4,
    label: 'clássico',
    image: 'icons/museum.svg',
  },
  {
    id: 5,
    label: 'e mais...',
    image: 'icons/earth.svg',
  },
];
