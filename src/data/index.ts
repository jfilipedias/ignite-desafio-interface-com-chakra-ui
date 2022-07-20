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

interface City {
  id: number;
  name: string;
  country: string;
  image: string;
  countryImage: string;
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

export const cities: City[] = [
  {
    id: 1,
    name: 'Londres',
    country: 'Reino Unido',
    image:
      'https://images.unsplash.com/photo-1533929736458-ca588d08c8be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    countryImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Flag_of_the_United_Kingdom.svg/1280px-Flag_of_the_United_Kingdom.svg.png',
  },
  {
    id: 2,
    name: 'París',
    country: 'Fraça',
    image:
      'https://images.unsplash.com/photo-1522093007474-d86e9bf7ba6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80',
    countryImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg/1024px-Flag_of_France_%281794%E2%80%931815%2C_1830%E2%80%931974%2C_2020%E2%80%93present%29.svg.png',
  },
  {
    id: 3,
    name: 'Roma',
    country: 'Itália',
    image:
      'https://images.unsplash.com/photo-1529260830199-42c24126f198?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80',
    countryImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Flag_of_Italy.svg/1024px-Flag_of_Italy.svg.png',
  },
  {
    id: 4,
    name: 'Praga',
    country: 'República Tcheca',
    image:
      'https://images.unsplash.com/photo-1519677100203-a0e668c92439?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    countryImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/1024px-Flag_of_the_Czech_Republic.svg.png',
  },
  {
    id: 5,
    name: 'Amsterdã',
    country: 'Holanda',
    image:
      'https://images.unsplash.com/photo-1512470876302-972faa2aa9a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
    countryImage:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Flag_of_the_Netherlands.svg/1024px-Flag_of_the_Netherlands.svg.png',
  },
];
