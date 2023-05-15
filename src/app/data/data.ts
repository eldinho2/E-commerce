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

const dataPlanters = [
    {
        id: uuidv4(),
        image: '/planters/beige fracture.svg',
        name: 'Beige Fracture',
        price: 52.49,
        oldPrice: 69.99,
    },
    {
        id: uuidv4(),
        image: '/planters/ice cream pot.svg',
        name: 'Ice Cream Pot',
        price: 52.49,
        oldPrice: 69.99,
    },
    {
        id: uuidv4(),
        image: '/planters/mint fusion.svg',
        name: 'Mint Fusion',
        price: 52.49,
        oldPrice: 69.99,
    },
    {
        id: uuidv4(),
        image: '/planters/tale pot.svg',
        name: 'Tale Pot',
        price: 52.49,
        oldPrice: 69.99,
    },
]

const allProducts = [
    {
        id: uuidv4(),
        image: '/trendPlants/jadeplant.svg',
        name: 'Jade',
        price: 35.00,
        category: ['indoorPlants', 'smallPlants']
    },
    {
        id: uuidv4(),
        image: '/trendPlants/aloe.svg',
        name: 'Cacto',
        price: 59.99,
        category: ['indoorPlants']
    },
    {
        id: uuidv4(),
        image: '/trendPlants/areca.svg',
        name: 'Areca-bambu',
        price: 45.99,
        category: ['indoorPlants']
    },
    {
        id: uuidv4(),
        image: '/trendPlants/cactus.svg',
        name: 'Cacto-do-peru',
        price: 29.99,
        category: ['indoorPlants']
    },
    {
        id: uuidv4(),
        image: '/trendPlants/chlorophytum.svg',
        name: 'Planta-Aranha',
        price: 30.00,
        category: ['outdoorPlants']
    },
    {
        id: uuidv4(),
        image: '/medium/trepadeira.webp',
        name: '2 Ramos Trepadeira',
        price: 99.99,
        category: ['outdoorPlants', 'medium']
    },
    {
        id: uuidv4(),
        image: '/medium/samambaia.webp',
        name: 'Samambaia Americana',
        price: 150.49,
        category: ['outdoorPlants', 'medium']
    },
    {
        id: uuidv4(),
        image: '/big/eucalipto_silver_drop.webp',
        name: 'Eucalipto',
        price: 1030.99,
        category: ['outdoorPlants', 'big']
    },
    {
        id: uuidv4(),
        image: '/big/tifonodoro-typhonodorum-lindleyanum-1-1.webp',
        name: 'Bananeira dgua',
        price: 546.99,
        category: ['outdoorPlants', 'big']
    },
    {
        id: uuidv4(),
        image: '/seeds/eucalipto_baby_blue_1.webp',
        name: 'Sementes Eucaipto',
        price: 546.99,
        category: ['outdoorPlants', 'outseeds']
    },
    {
        id: uuidv4(),
        image: '/trendPlants/ficus.svg',
        name: 'Ficus Benjamina',
        price: 59.99,
        category: ['indoorPlants', 'smallPlants']
    },
    {
        id: uuidv4(),
        image: '/trendPlants/sansevieria.svg',
        name: 'Espada São Jorge Negra',
        price: 49.99,
        category: ['indoorPlants']
    },
    {
        id: uuidv4(),
        image: '/trendPlants/syngorium.svg',
        name: 'Planta-Cabeça-De-Flecha',
        price: 45.99,
        category: ['indoorPlants', 'smallPlants']
    },
    {
        id: uuidv4(),
        image: '/hotSale/ficus.svg',
        name: 'Ficus Benjamina twilight',
        price: 59.99,
        oldPrice: 79.99,
        category: ['outdoorPlants']
    },
    {
        id: uuidv4(),
        image: '/hotSale/adenium.svg',
        name: 'Planta Adenium Obesum',
        price: 52.49,
        oldPrice: 69.99,
        category: ['outdoorPlants']
    },
    {
        id: uuidv4(),
        image: '/hotSale/rhoeo.svg',
        name: 'Nunca-nunca',
        price: 52.49,
        oldPrice: 69.99,
        category: ['indoorPlants', 'smallPlants']
    },
    {
        id: uuidv4(),
        image: '/hotSale/ctenanthe.svg',
        name: 'Planta Rhoeo',
        price: 52.49,
        oldPrice: 69.99,
        category: ['outdoorPlants']
    },
    {
        id: uuidv4(),
        image: '/planters/beige fracture.svg',
        name: 'Beige Fracture',
        price: 52.49,
        oldPrice: 69.99,
        category: ['planters'] 
    },
    {
        id: uuidv4(),
        image: '/planters/ice cream pot.svg',
        name: 'Ice Cream Pot',
        price: 52.49,
        oldPrice: 69.99,
        category: ['planters']
    },
    {
        id: uuidv4(),
        image: '/planters/mint fusion.svg',
        name: 'Mint Fusion',
        price: 52.49,
        oldPrice: 69.99,
        category: ['planters'] 
    },
    {
        id: uuidv4(),
        image: '/planters/tale pot.svg',
        name: 'Tale Pot',
        price: 52.49,
        oldPrice: 69.99,
        category: ['planters']
     },
     {
        id: uuidv4(),
        image: '/flowers/flower1.webp',
        name: 'Jardim de Rosas - Amarelo',
        price: 152.49,
        category: ['indoorPlants', 'flowers']
     },
     {
        id: uuidv4(),
        image: '/flowers/flower2.webp',
        name: 'Jardim de Rosas - Pink',
        price: 182.49,
        category: ['indoorPlants', 'flowers']
     },
     {
        id: uuidv4(),
        image: '/flowers/flower3.webp',
        name: 'Jardim de Rosas - Esperance',
        price: 252.49,
        category: ['indoorPlants', 'flowers']
     },
     {
        id: uuidv4(),
        image: '/flowers/flower4.webp',
        name: 'Jardim de Rosas - Vermelho',
        price: 122.49,
        category: ['indoorPlants', 'flowers']
     },
     {
        id: uuidv4(),
        image: '/seeds/vinca_pendente_cora_cascade_cherry_2393_2_b1a7d9764109a5f09af6d7e97876a194.webp',
        name: 'Sementes de Vinca Cherry',
        price: 12.49,
        category: ['indoorPlants', 'seeds']
     },
     {
        id: uuidv4(),
        image: '/seeds/manjericao_gemini_1805_1_20200920122250.webp',
        name: 'Sementes de Manjericão Gemini',
        price: 4.99,
        category: ['indoorPlants', 'seeds']
     },
]

export { dataTrendingPlants, dataHotSalePlants, dataPlanters, allProducts };