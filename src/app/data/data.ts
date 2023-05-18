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
        category: ['indoorPlants', 'smallPlants'],
        details: "A Jade é uma planta suculenta popularmente conhecida por sua folhagem verde-escura e formato arredondado. Ela é fácil de cuidar e pode ser cultivada tanto em ambientes internos quanto externos."
    },
    {
        id: uuidv4(),
        image: '/trendPlants/aloe.svg',
        name: 'Cacto',
        price: 59.99,
        category: ['indoorPlants'],
        details: "O Cacto é uma planta suculenta que requer pouca água e é conhecida por sua capacidade de armazenar umidade. Suas folhas espessas e espinhosas dão um toque único a qualquer ambiente."
    },
    {
        id: uuidv4(),
        image: '/trendPlants/areca.svg',
        name: 'Areca-bambu',
        price: 45.99,
        category: ['indoorPlants'],
        details: "A Areca-bambu é uma planta de folhagem exuberante e elegante. Ela é amplamente utilizada como planta decorativa em interiores, pois adiciona um toque de tropicalidade ao ambiente."
    },
    {
        id: uuidv4(),
        image: '/trendPlants/cactus.svg',
        name: 'Cacto-do-peru',
        price: 29.99,
        category: ['indoorPlants'],
        details: "O Cacto-do-peru é uma planta suculenta de porte médio e espinhos pontiagudos. Originário do Peru, ele é valorizado por sua resistência e beleza única."
    },
    {
        id: uuidv4(),
        image: '/trendPlants/chlorophytum.svg',
        name: 'Planta-Aranha',
        price: 30.00,
        category: ['outdoorPlants'],
        details: "A Planta-Aranha é uma planta herbácea resistente que se adapta facilmente a diferentes condições de luz e umidade. Suas folhas verdes e arqueadas dão um toque de elegância ao ambiente."
    },
    {
        id: uuidv4(),
        image: '/medium/trepadeira.webp',
        name: '2 Ramos Trepadeira',
        price: 99.99,
        category: ['outdoorPlants', 'medium'],
        details: "A 2 Ramos Trepadeira é uma planta versátil que pode ser cultivada tanto como planta pendente quanto como trepadeira. Suas folhas verdes e delicadas acrescentam charme a qualquer espaço."
    },
    {
        id: uuidv4(),
        image: '/medium/samambaia.webp',
        name: 'Samambaia Americana',
        price: 150.49,
        category: ['outdoorPlants', 'medium'],
        details: "A Samambaia Americana é uma planta exuberante que pode ser cultivada em vasos suspensos ou em jardins verticais. Suas folhas finamente recortadas conferem uma aparência delicada e elegante."
    },
    {
        id: uuidv4(),
        image: '/big/eucalipto_silver_drop.webp',
        name: 'Eucalipto',
        price: 1030.99,
        category: ['outdoorPlants', 'big'],
        details: "O Eucalipto é uma árvore majestosa conhecida por suas folhas prateadas e aroma refrescante. Ele é perfeito para áreas externas espaçosas e adiciona um toque de elegância natural ao paisagismo."
    },
    {
        id: uuidv4(),
        image: '/big/tifonodoro-typhonodorum-lindleyanum-1-1.webp',
        name: 'Bananeira dgua',
        price: 546.99,
        category: ['outdoorPlants', 'big'],
        details: "A Bananeira d'água é uma planta tropical de grande porte e folhagem exuberante. Suas grandes folhas verdes proporcionam um ambiente tropical e luxuoso."
    },
    {
        id: uuidv4(),
        image: '/seeds/eucalipto_baby_blue_1.webp',
        name: 'Sementes Eucaipto',
        price: 546.99,
        category: ['outdoorPlants', 'outseeds'],
        details: "As Sementes de Eucalipto são ideais para quem deseja cultivar suas próprias árvores de eucalipto. Essas sementes proporcionam uma experiência gratificante de plantio e crescimento."
    },
    {
        id: uuidv4(),
        image: '/trendPlants/ficus.svg',
        name: 'Ficus Benjamina',
        price: 59.99,
        category: ['indoorPlants', 'smallPlants'],
        details: "O Ficus Benjamina é uma planta de interior muito popular, valorizada por suas folhas brilhantes e elegantes. Ele adiciona um toque de sofisticação a qualquer espaço."
    },
    {
        id: uuidv4(),
        image: '/trendPlants/sansevieria.svg',
        name: 'Espada São Jorge Negra',
        price: 49.99,
        category: ['indoorPlants'],
        details: "A Espada São Jorge Negra, também conhecida como Sansevieria, é uma planta de interior de baixa manutenção. Suas folhas espessas e verdes-escuras adicionam um toque de elegância a qualquer ambiente."
    },
    {
        id: uuidv4(),
        image: '/trendPlants/syngorium.svg',
        name: 'Planta-Cabeça-De-Flecha',
        price: 45.99,
        category: ['indoorPlants', 'smallPlants'],
        details: "A Planta-Cabeça-De-Flecha, também conhecida como Syngorium, é uma planta de interior compacta e atraente. Suas folhas em forma de flecha adicionam um toque de cor e estilo a qualquer ambiente."
    },
    {
        id: uuidv4(),
        image: '/hotSale/ficus.svg',
        name: 'Ficus Benjamina twilight',
        price: 59.99,
        oldPrice: 79.99,
        category: ['outdoorPlants'],
        details: "O Ficus Benjamina Twilight é uma variedade de Ficus Benjamina com folhas variegadas em tons de verde e branco. Ele é ideal para áreas externas e proporciona um toque de sofisticação ao jardim."
    },
    {
        id: uuidv4(),
        image: '/hotSale/adenium.svg',
        name: 'Planta Adenium Obesum',
        price: 52.49,
        oldPrice: 69.99,
        category: ['outdoorPlants'],
        details: "A Planta Adenium Obesum, também conhecida como Rosa do Deserto, é uma planta suculenta de aparência exótica. Suas flores vibrantes e seu caule robusto são verdadeiros destaques em jardins e pátios."
    },
    {
        id: uuidv4(),
        image: '/hotSale/rhoeo.svg',
        name: 'Nunca-nunca',
        price: 52.49,
        oldPrice: 69.99,
        category: ['indoorPlants', 'smallPlants'],
        details: "O Nunca-nunca, também conhecido como Rhoeo, é uma planta compacta de folhagem colorida. Suas folhas roxas, verdes e brancas adicionam um toque de vivacidade a qualquer espaço."
    },
    {
        id: uuidv4(),
        image: '/hotSale/ctenanthe.svg',
        name: 'Planta Rhoeo',
        price: 52.49,
        oldPrice: 69.99,
        category: ['outdoorPlants'],
        details: "A Planta Rhoeo é uma planta ornamental de fácil cultivo. Suas folhas verdes e roxas criam um contraste interessante e adicionam um toque de beleza ao jardim."
    },
    {
        id: uuidv4(),
        image: '/planters/beige fracture.svg',
        name: 'Beige Fracture',
        price: 52.49,
        oldPrice: 69.99,
        category: ['planters'],
        details: "O Beige Fracture é um vaso de planta elegante e moderno. Sua superfície texturizada e cor neutra tornam-no uma escolha versátil para realçar a beleza das plantas."
    },
    {
        id: uuidv4(),
        image: '/planters/ice cream pot.svg',
        name: 'Ice Cream Pot',
        price: 52.49,
        oldPrice: 69.99,
        category: ['planters'],
        details: "O Ice Cream Pot é um vaso de planta com um design divertido e único, inspirado em um sorvete. Ele adiciona um toque lúdico e criativo à decoração de qualquer ambiente."
    },
    {
        id: uuidv4(),
        image: '/planters/mint fusion.svg',
        name: 'Mint Fusion',
        price: 52.49,
        oldPrice: 69.99,
        category: ['planters'],
        details: "O Mint Fusion é um vaso de planta elegante com uma combinação de cores suaves e textura delicada. Ele traz um toque de serenidade e estilo ao ambiente."
    },
    {
        id: uuidv4(),
        image: '/planters/tale pot.svg',
        name: 'Tale Pot',
        price: 52.49,
        oldPrice: 69.99,
        category: ['planters'],
        details: "O Tale Pot é um vaso de planta moderno e minimalista, perfeito para quem busca um estilo clean. Sua forma geométrica simples se encaixa perfeitamente em qualquer ambiente."
    },
    {
        id: uuidv4(),
        image: '/flowers/flower1.webp',
        name: 'Jardim de Rosas - Amarelo',
        price: 152.49,
        category: ['indoorPlants', 'flowers'],
        details: 'Uma bela planta de rosas amarelas. Seu jardim ganhará vida com essas flores radiantes e vibrantes. As rosas amarelas simbolizam a amizade e a alegria, e são perfeitas para alegrar qualquer ambiente. Adquira essa planta e tenha um toque de luz e calor em sua casa.'
    },
    {
        id: uuidv4(),
        image: '/flowers/flower2.webp',
        name: 'Jardim de Rosas - Pink',
        price: 182.49,
        category: ['indoorPlants', 'flowers'],
        details: 'Uma deslumbrante planta de rosas cor de rosa. Essas flores encantadoras trarão uma atmosfera romântica e delicada para o seu espaço. As rosas cor de rosa simbolizam o amor e a gratidão, tornando-as um presente perfeito para alguém especial ou para enfeitar o seu lar.'
    },
    {
        id: uuidv4(),
        image: '/flowers/flower3.webp',
        name: 'Jardim de Rosas - Esperance',
        price: 252.49,
        category: ['indoorPlants', 'flowers'],
        details: 'Uma elegante planta de rosas Esperance. Essas rosas têm uma beleza cativante e são conhecidas por sua longa duração. Elas representam a esperança e a renovação, trazendo uma sensação de serenidade e equilíbrio ao seu ambiente. Tenha essa planta em casa e desfrute de sua sofisticação e tranquilidade.'
    },
    {
        id: uuidv4(),
        image: '/flowers/flower4.webp',
        name: 'Jardim de Rosas - Vermelho',
        price: 122.49,
        category: ['indoorPlants', 'flowers'],
        details: 'Uma linda planta de rosas vermelhas. As rosas vermelhas são clássicas e atemporais, simbolizando o amor e a paixão. Elas adicionam um toque de elegância e romance a qualquer espaço. Surpreenda alguém especial com essa planta ou crie um ambiente envolvente em sua casa.'
    },
    {
        id: uuidv4(),
        image: '/seeds/vinca_pendente_cora_cascade_cherry_2393_2_b1a7d9764109a5f09af6d7e97876a194.webp',
        name: 'Sementes de Vinca Cherry',
        price: 12.49,
        category: ['indoorPlants', 'seeds'],
        details: 'Essas sementes de Vinca Cherry são ideais para aqueles que desejam cultivar suas próprias plantas. A Vinca Cherry é uma flor deslumbrante, com pétalas em tons vibrantes de cereja. Com essas sementes, você poderá criar um belo jardim cheio de cores e atrairá borboletas e pássaros para alegrar seu espaço ao ar livre.'
    },
    {
        id: uuidv4(),
        image: '/seeds/manjericao_gemini_1805_1_20200920122250.webp',
        name: 'Sementes de Manjericão Gemini',
        price: 4.99,
        category: ['indoorPlants', 'seeds'],
        details: 'As sementes de Manjericão Gemini são perfeitas para os amantes da culinária. Com seu aroma delicioso e sabor único, o manjericão é uma erva versátil que pode ser usado em diversas receitas. Cultive seu próprio manjericão fresco em casa e adicione um toque especial aos seus pratos favoritos. Essas sementes são fáceis de cultivar e proporcionarão uma colheita abundante.'
    },
];


export { dataTrendingPlants, dataHotSalePlants, dataPlanters, allProducts };