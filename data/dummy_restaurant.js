import {icons, images, SIZES, COLORS, FONTS} from '../constants';

export const restaurantData = [
  {
    id: 1,
    name: 'Biryani',
    rating: 4.8,
    categories: [1],

    photo: images.Main_Biryani,
    duration: '30 - 45 min',

    menu: [
      {
        menuId: 1,
        name: 'Chicken Biryani',
        photo: images.Chicken_biryani,
        description: 'Basmathi Rice with Fried Chicken',
        calories: 200,
        price: 450,
      },
      {
        menuId: 2,
        name: 'Hyderabadhi_Biryani',
        photo: images.Hydrabadi_Biryani,
        description: 'It is prepared from rice using the dum method of cooking',
        calories: 250,
        price: 650,
      },
      {
        menuId: 3,
        name: 'Mutton Biryani',
        photo: images.Muuton_Biryani,
        description: 'Basmathi Rice with Fried Chicken',
        calories: 194,
        price: 800,
      },
      {
        menuId: 4,
        name: 'Vegetable Biryani',
        photo: images.Veg_Biryani,
        description: 'Basmathi Rice with Fresh Vegetable',
        calories: 194,
        price: 350,
      },
    ],
  },

  {
    id: 2,
    name: 'Fried Rice',
    rating: 4.8,
    categories: [1],

    photo: images.Fried_rice_Main,
    duration: '30 - 45 min',

    menu: [
      {
        menuId: 5,
        name: 'Chicken Fired Rice',
        photo: images.Chicken_Fried_Rice,
        description: 'Basmathi Rice with Fried Chicken',
        calories: 200,
        price: 450,
      },
      {
        menuId: 6,
        name: 'Egg Fried Rice',
        photo: images.Egg_Fried_Rice,
        description: 'Basmathi Rice with Egg',
        calories: 250,
        price: 450,
      },
      {
        menuId: 7,
        name: 'Vegetable Fried Rice',
        photo: images.Veg_Fried_Rice,
        description: 'Basmathi Rice with Fried Fresh Vegetable',
        calories: 194,
        price: 350,
      },
    ],
  },
  {
    id: 3,
    name: 'Mongolian Rice',
    rating: 4.8,
    categories: [1],

    photo: images.Main_Mongolian,
    duration: '30 - 45 min',

    menu: [
      {
        menuId: 8,
        name: 'Mongolian Chicken',
        photo: images.Mongolian_Chicken,
        description: 'Male Rice With Chicken',
        calories: 200,
        price: 750,
      },
    ],
  },
  {
    id: 4,
    name: 'Nasigoreng',
    rating: 4.8,
    categories: [1],

    photo: images.Main_nasi_goreng,
    duration: '40 - 55 min',

    menu: [
      {
        menuId: 9,
        name: 'SeaFood Nasigoreng',
        photo: images.SeaFood_Nasigoreng,
        description: 'Cuttle Fish with Basmathi Rice',
        calories: 200,
        price: 850,
      },
      {
        menuId: 10,
        name: 'Shrimp Nasigoreng',
        photo: images.Shrimp_Nasigoreng,
        description: 'Fried Shrimp with Rice',
        calories: 250,
        price: 650,
      },
    ],
  },
  {
    id: 5,
    name: 'Rice & Curry',
    rating: 4.8,
    categories: [1],

    photo: images.Main_Rice_Curry,
    duration: '40 - 55 min',

    menu: [
      {
        menuId: 11,
        name: 'Chicken Rice & Curry ',
        photo: images.chicken_Rice_Curry,
        description: 'Chicken with normal rice',
        calories: 200,
        price: 200,
      },
      {
        menuId: 12,
        name: 'Fish Rice & Curry',
        photo: images.Fish_Rice_Curry,
        description: 'Fish with normal rice',
        calories: 250,
        price: 150,
      },
      {
        menuId: 13,
        name: 'Beef Rice & Curry',
        photo: images.Beef_Rice_Curry,
        description: 'Beef with normal rice',
        calories: 250,
        price: 200,
      },
      {
        menuId: 14,
        name: 'Vegetable Rice & Curry',
        photo: images.Veg_Rice_Curry,
        description: 'Vegetable with normal rice',
        calories: 250,
        price: 100,
      },
    ],
  },
  //Noodles
  {
    id: 6,
    name: 'Chinese Noodles',
    rating: 4.7,
    categories: [2],

    photo: images.Main_ChineseNoodles,
    duration: '20 - 25 min',

    menu: [
      {
        menuId: 15,
        name: 'Baco Pan',
        photo: images.Bacon_Pan_Fried_Noodles,
        description: 'Fried Noodles ',
        calories: 200,
        price: 450,
      },
      {
        menuId: 16,
        name: 'Ding-Ding-Chao-Mian',
        photo: images.Ding_Ding_Chao_Mian,
        description: 'Fried Noodles in Lamb Tomato Sauce',
        calories: 250,
        price: 850,
      },
    ],
  },
  {
    id: 7,
    name: 'Italian Noodles',
    rating: 4.5,
    categories: [2],

    photo: images.Main_ItalianNoodles,
    duration: '30 - 35 min',

    menu: [
      {
        menuId: 17,
        name: 'Italian Shrimp',
        photo: images.Italian_Shrimp,
        description: 'Shrimp with Noodles',
        calories: 250,
        price: 550,
      },
      {
        menuId: 18,
        name: 'fettuccine-alfredo',
        photo: images.fettuccine_alfredo,
        description: 'Fettuccine with butter',
        calories: 320,
        price: 950,
      },
    ],
  },
  {
    id: 8,
    name: 'Korean Noodles',
    rating: 4.7,
    categories: [2],

    photo: images.Main_KorenNoodles,
    duration: '30 - 35 min',

    menu: [
      {
        menuId: 19,
        name: 'Jajangmyeon-Korean',
        photo: images.Jajangmyeon_Korean_Noodles_in_Black_Bean_Sauce,
        description: 'Noodles-in-Black-Bean-Sauce',
        calories: 250,
        price: 730,
      },
    ],
  },
  //Hot Dogs
  {
    id: 9,
    name: 'Bacon Hot Dogs',
    rating: 4.7,
    categories: [3],

    photo: images.Main_Hot_Dog,
    duration: '15 - 20 min',

    menu: [
      {
        menuId: 20,
        name: 'Bacon-Wrapped-Hot-Dogs',
        photo: images.Bacon_Wrapped_Hot_Dogs,
        description: 'Bacon-Wrapped-Hot-Dogs',
        calories: 150,
        price: 450,
      },
    ],
  },
  {
    id: 10,
    name: 'Grilled Hot Dogs',
    rating: 4.5,
    categories: [3],

    photo: images.GrillledCheese_HotDogs,
    duration: '15 - 20 min',

    menu: [
      {
        menuId: 21,
        name: 'Pine Appple Hot Dog',
        photo: images.HotDog_WithPineAplle_Topping,
        description: 'Pine Apple Topping',
        calories: 120,
        price: 690,
      },
    ],
  },

  //Salads
  {
    id: 11,
    name: 'Green Salads',
    rating: 4.3,
    categories: [4],

    photo: images.Main_GreenSalads,
    duration: '10 - 15 min',

    menu: [
      {
        menuId: 22,
        name: 'Avovcado Salads',
        photo: images.Avocado_Salad,
        description: 'Salad with Avacado',
        calories: 250,
        price: 590,
      },
      {
        menuId: 23,
        name: 'Tangy Salads',
        photo: images.Green_Salad_with_Tangy_Basil,
        description: 'Salad with Tangy Basil',
        calories: 270,
        price: 690,
      },
    ],
  },
  {
    id: 12,
    name: 'Dinner Salads',
    rating: 4.5,
    categories: [4],

    photo: images.Main_Dinner_Salads,
    duration: '20 - 25 min',

    menu: [
      {
        menuId: 24,
        name: 'Health Taco',
        photo: images.Healthhy_Taco,
        description: 'Salad with Taco',
        calories: 280,
        price: 599,
      },
      {
        menuId: 25,
        name: 'Summer Salads',
        photo: images.Summer_Salad,
        description: 'Much Healthy',
        calories: 320,
        price: 520,
      },
    ],
  },
  {
    id: 13,
    name: 'Pasta Salads',
    rating: 4.2,
    categories: [4],

    photo: images.Main_Pasta_Salad,
    duration: '40 - 45 min',

    menu: [
      {
        menuId: 26,
        name: 'Creamy Pasta ',
        photo: images.Creamy_Pasta_Salad,
        description: 'Salad wtih Creamy Pasta',
        calories: 310,
        price: 799,
      },
      {
        menuId: 27,
        name: 'Pasta Rice Salads',
        photo: images.Pasta_Rice_Salad,
        description: 'Pasta with Rice',
        calories: 310,
        price: 600,
      },
    ],
  },
  //Burger
  {
    id: 14,
    name: 'Cheeese Burger',
    rating: 4.0,
    categories: [5],

    photo: images.Main_CheeseBurger,
    duration: '30 - 35 min',

    menu: [
      {
        menuId: 28,
        name: 'Double Cheese Burger',
        photo: images.double_CheeseBurger,
        description: 'Double Layer of Cheese',
        calories: 220,
        price: 650,
      },
    ],
  },
  {
    id: 15,
    name: 'Chicken Burger',
    rating: 4.9,
    categories: [5],

    photo: images.Main_Chicken_Burgers,
    duration: '30 - 40 min',

    menu: [
      {
        menuId: 29,
        name: 'Crispy Burger',
        photo: images.Crispy_Chicken_Burger,
        description: 'Burger with Crispy Chicken',
        calories: 250,
        price: 750,
      },
      {
        menuId: 30,
        name: 'Butter Milk Burger',
        photo: images.Buttrer_Milk_Crispy_Chicken,
        description: 'Butter Milk with Crispy Chicken',
        calories: 260,
        price: 900,
      },
    ],
  },
  {
    id: 16,
    name: 'Fish Burger',
    rating: 4.4,
    categories: [5],

    photo: images.Main_FishBurger,
    duration: '25 - 30 min',

    menu: [
      {
        menuId: 31,
        name: 'Breaded Fish Burger',
        photo: images.breaded_fish_burger,
        description: 'Breaded Fish',
        calories: 270,
        price: 750,
      },
      {
        menuId: 32,
        name: 'Crispy Burger',
        photo: images.crispy_fish_burger,
        description: 'Burger with Crispy Fish',
        calories: 340,
        price: 520,
      },
    ],
  },
  {
    id: 17,
    name: 'Vegetable Burger',
    rating: 4.4,
    categories: [5],

    photo: images.Main_VegBurger,
    duration: '15 - 20 min',

    menu: [
      {
        menuId: 33,
        name: 'Vegan Mashroom Burger',
        photo: images.vegan_mushroom_burer,
        description: 'Burger with Mashroom',
        calories: 350,
        price: 450,
      },
    ],
  },
  //Pizza
  {
    id: 18,
    name: 'Cheesy Pizza',
    rating: 4.2,
    categories: [6],

    photo: images.Main_CheesePizza,
    duration: '20 - 25 min',

    menu: [
      {
        menuId: 34,
        name: 'Goat Pizza',
        photo: images.Goat_Cheese,
        description: 'Pizza with Goat Cheese',
        calories: 380,
        price: 600,
      },
      {
        menuId: 35,
        name: 'Peeporini Pizza',
        photo: images.PeeporiniPizza,
        description: 'Pizza with Peeporini',
        calories: 250,
        price: 800,
      },
    ],
  },
  {
    id: 19,
    name: 'Grilled Pizza',
    rating: 4.0,
    categories: [6],

    photo: images.Main_GrilledPizza,
    duration: '10 - 15 min',

    menu: [
      {
        menuId: 36,
        name: 'Party Pizza',
        photo: images.Party_Pizza,
        description: 'Serve 2-4',
        calories: 480,
        price: 1000,
      },
    ],
  },
  {
    id: 20,
    name: 'Italian Pizza',
    rating: 4.1,
    categories: [6],

    photo: images.Main_Italianpizza,
    duration: '30 - 35 min',

    menu: [
      {
        menuId: 37,
        name: 'Pizza-Margherita',
        photo: images.Pizza_Margherita,
        description: 'made with San Marzano tomatoes',
        calories: 440,
        price: 1200,
      },
      {
        menuId: 38,
        name: 'Thin crust Pizza',
        photo: images.Italian_Thin_Crust_Pizza,
        description: 'Authentic Italian Pizza',
        calories: 320,
        price: 1500,
      },
    ],
  },
  //Snacks
  {
    id: 21,
    name: 'French Fries',
    rating: 4.0,
    categories: [7],

    photo: images.Main_French_Fries,
    duration: '5 - 10 min',

    menu: [
      {
        menuId: 39,
        name: 'Grilled French Fries',
        photo: images.Grilled,
        description: 'Grilled',
        calories: 300,
        price: 200,
      },
      {
        menuId: 40,
        name: 'Sweet French Fries',
        photo: images.sweet_potato_fries,
        description: 'Sweet Potato Fries',
        calories: 350,
        price: 300,
      },
    ],
  },
  {
    id: 22,
    name: 'Pop Corn',
    rating: 4.5,
    categories: [7],

    photo: images.Main_PopCorn,
    duration: '10- 15 min',

    menu: [
      {
        menuId: 41,
        name: 'Caramel PopCorn',
        photo: images.Caramel_Popcorn,
        description: 'Popcorn with Caramel',
        calories: 420,
        price: 250,
      },
      {
        menuId: 42,
        name: 'Salt PopCorn',
        photo: images.Salt_Popcorn,
        description: 'Salt + Vinegar',
        calories: 310,
        price: 320,
      },
    ],
  },
  {
    id: 23,
    name: 'Potato Kieves',
    rating: 4.8,
    categories: [7],

    photo: images.Main_potato_kieves,
    duration: '15- 20 min',

    menu: [
      {
        menuId: 43,
        name: 'Nuggets',
        photo: images.Nuggets,
        description: 'special Nuggets',
        calories: 360,
        price: 360,
      },
    ],
  },
  //Sushi

  {
    id: 24,
    name: 'California Roll',
    rating: 4.9,
    categories: [8],

    photo: images.Main_CaliforniaRoll,
    duration: '40- 50 min',

    menu: [
      {
        menuId: 44,
        name: 'California-Maki-Wide',
        photo: images.California_Maki_Wide,
        description: 'Maki-Wide with sushi',
        calories: 420,
        price: 750,
      },
      {
        menuId: 45,
        name: 'California-Cavier',
        photo: images.california_rolls_with_caviar,
        description: 'California-rolls-with-caviar',
        calories: 450,
        price: 900,
      },
    ],
  },
  {
    id: 25,
    name: 'Nigiri',
    rating: 4.6,
    categories: [8],

    photo: images.Main_NigiriSushi,
    duration: '30- 40 min',

    menu: [
      {
        menuId: 46,
        name: 'Tuna-Nigiri',
        photo: images.nigiri_sushi_tuna,
        description: 'Sushi with Tuna',
        calories: 500,
        price: 1200,
      },
    ],
  },
  {
    id: 26,
    name: 'Temari Sushi',
    rating: 4.5,
    categories: [8],

    photo: images.Main_Temari_Sushi,
    duration: '50- 60 min',

    menu: [
      {
        menuId: 47,
        name: 'Balls Temari',
        photo: images.Balls_Teamri,
        description: 'Sushi with Ball Temari',
        calories: 480,
        price: 1500,
      },
      {
        menuId: 48,
        name: 'Veg Temari',
        photo: images.Vegeterian_Temari,
        description: 'Sushi for Vegeterian',
        calories: 520,
        price: 850,
      },
    ],
  },
  //Desserts
  {
    id: 27,
    name: 'Brownie',
    rating: 4.7,
    categories: [9],

    photo: images.brownie_Main,
    duration: '40- 45 min',

    menu: [
      {
        menuId: 49,
        name: 'Brownie Ice Cake',
        photo: images.Brownie_IceCake,
        description: 'Brownie with Icing Cake',
        calories: 260,
        price: 960,
      },
      {
        menuId: 50,
        name: 'Brownie Sandwidch',
        photo: images.brownie_Sandwidch,
        description: 'Baked Sandwidch with Brownie',
        calories: 450,
        price: 850,
      },
      {
        menuId: 51,
        name: 'Fudge Brownie',
        photo: images.fudge_Brownie,
        description: 'Fudged Brownie',
        calories: 410,
        price: 900,
      },
    ],
  },
  {
    id: 28,
    name: 'Biscuit Pudding',
    rating: 4.4,
    categories: [9],

    photo: images.Main_biscuit_pudding,
    duration: '50- 55 min',

    menu: [
      {
        menuId: 52,
        name: 'Banana  Pudding',
        photo: images.Banana_Biscuit_Pudding,
        description: 'Banana Flavour',
        calories: 310,
        price: 1200,
      },
      {
        menuId: 53,
        name: 'chocolate Biscuit Pudding',
        photo: images.chocolate_BiscuitPudding,
        description: 'Chocolate Flavour',
        calories: 440,
        price: 950,
      },
    ],
  },
  {
    id: 29,
    name: 'Lava Cake',
    rating: 4.8,
    categories: [9],

    photo: images.Main_LavaCake,
    duration: '40- 45 min',

    menu: [
      {
        menuId: 54,
        name: 'Chocolate Molten',
        photo: images.Molten_Chocolate_Lava_Cakes,
        description: 'Moltened Lava',
        calories: 360,
        price: 1500,
      },
    ],
  },

  //Drinks
  {
    id: 30,
    name: 'Falooda',
    rating: 4.9,
    categories: [10],

    photo: images.Main_Falooda,
    duration: '10- 15 min',

    menu: [
      {
        menuId: 55,
        name: 'Mango Falooda',
        photo: images.Mango_Falooda,
        description: 'Mango Flavour',
        calories: 250,
        price: 300,
      },
      {
        menuId: 56,
        name: 'Kulfi Falooda',
        photo: images.Kulfi_Falooda,
        description: 'Combo of Kulfi with Falooda ',
        calories: 400,
        price: 400,
      },
      {
        menuId: 57,
        name: 'Kesar Falooda',
        photo: images.kesar_pista_falooda,
        description: 'Kesar With Pasta',
        calories: 520,
        price: 550,
      },
    ],
  },
  {
    id: 31,
    name: 'Fresh Juices',
    rating: 4.5,
    categories: [10],

    photo: images.Main_fresh_juice,
    duration: '15- 20 min',

    menu: [
      {
        menuId: 58,
        name: 'Mango Juice',
        photo: images.Mango_Fresh_Juice,
        description: ' Fresh Mango Juice',
        calories: 250,
        price: 300,
      },
      {
        menuId: 59,
        name: 'Grape Juice',
        photo: images.Fresh_Grape_Juice,
        description: 'Fresh Grape Juice ',
        calories: 400,
        price: 400,
      },
      {
        menuId: 60,
        name: 'Orange Juice',
        photo: images.Orange_Juice,
        description: 'Fresh Orange Juice',
        calories: 520,
        price: 250,
      },
    ],
  },
  {
    id: 32,
    name: 'Milk Shakes',
    rating: 4.8,
    categories: [10],

    photo: images.Main_MilkShake,
    duration: '20- 25 min',

    menu: [
      {
        menuId: 61,
        name: 'Straw Berry Shake',
        photo: images.Strawberry_Milkshake,
        description: ' Fresh Strawberry Milkshake',
        calories: 250,
        price: 350,
      },
      {
        menuId: 62,
        name: 'Mango Shake',
        photo: images.Mango_Milk_Shake,
        description: 'Fresh Mango Milk Shake',
        calories: 400,
        price: 450,
      },
      {
        menuId: 63,
        name: 'Chocolate Milk Shake',
        photo: images.chocolate_milkshake,
        description: 'Chocolate Falvoured',
        calories: 520,
        price: 350,
      },
    ],
  },
  {
    id: 33,
    name: 'Soft Drinks',
    rating: 4.0,
    categories: [10],

    photo: images.Main_softdrink,
    duration: '5- 10 min',

    menu: [
      {
        menuId: 64,
        name: 'Fanta',
        photo: images.Fanta_SoftDrinks,
        description: 'Orange Flavoured',
        calories: 250,
        price: 250,
      },
      {
        menuId: 65,
        name: 'Coco-Cola',
        photo: images.coca_cola_soda_ice,
        description: 'Chilled Coke',
        calories: 100,
        price: 150,
      },
    ],
  },
];
