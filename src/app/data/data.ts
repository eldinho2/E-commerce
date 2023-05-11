import { v4 as uuidv4 } from 'uuid';

const dataTrendingPlants = [
    {
        id: uuidv4(),
        image: '/trendPlants/jadeplant.svg',
        name: 'Jade',
        price: 35.00,
    },
    {
        id: uuidv4(),
        image: '/trendPlants/aloe.svg',
        name: 'Cacto',
        price: 59.99,
    },
    {
        id: uuidv4(),
        image: '/trendPlants/areca.svg',
        name: 'Areca-bambu',
        price: 45.99,
    },
    {
        id: uuidv4(),
        image: '/trendPlants/cactus.svg',
        name: 'Cacto-do-peru',
        price: 29.99,
    },
    {
        id: uuidv4(),
        image: '/trendPlants/chlorophytum.svg',
        name: 'Planta-Aranha',
        price: 30.00,
    },
    {
        id: uuidv4(),
        image: '/trendPlants/ficus.svg',
        name: 'Ficus Benjamina',
        price: 59.99,
    },
    {
        id: uuidv4(),
        image: '/trendPlants/sansevieria.svg',
        name: 'Espada São Jorge Negra',
        price: 49.99,
    },
    {
        id: uuidv4(),
        image: '/trendPlants/syngorium.svg',
        name: 'Planta-Cabeça-De-Flecha',
        price: 45.99,
    },
];

const dataHotSalePlants = [
    {
        id: uuidv4(),
        image: '/hotSale/ficus.svg',
        name: 'Ficus Benjamina twilight',
        price: 59.99,
        oldPrice: 79.99,
    },
    {
        id: uuidv4(),
        image: '/hotSale/adenium.svg',
        name: 'Planta Adenium Obesum',
        price: 52.49,
        oldPrice: 69.99,
    },
    {
        id: uuidv4(),
        image: '/hotSale/rhoeo.svg',
        name: 'Nunca-nunca',
        price: 52.49,
        oldPrice: 69.99,
    },
    {
        id: uuidv4(),
        image: '/hotSale/ctenanthe.svg',
        name: 'Planta Rhoeo',
        price: 52.49,
        oldPrice: 69.99,
    },
];

export { dataTrendingPlants, dataHotSalePlants };