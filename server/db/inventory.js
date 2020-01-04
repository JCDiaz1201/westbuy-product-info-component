const inventory = [
  {
    id: 1,
    name: "Amazing Cowboys Western Belt",
    price: 19.13,
    sku: "6-001",
    model: 5195,
    onHand: 22,
    options: ["Black", "White", "Brown"],
    auxCategory: "Belts"
  },
  {
    id: 2,
    name: "Silver Rhinestone Westernized Belt",
    price: 26.79,
    sku: "6-002",
    model: 9171,
    onHand: 2,
    options: ["Black", "White", "Brown"],
    auxCategory: "Belts"
  },
  {
    id: 3,
    name: "Authentic Cowboy Boots",
    price: 86.43,
    sku: "6-003",
    model: 12567,
    onHand: 4,
    options: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    auxCategory: "Boots"
  },
  {
    id: 4,
    name: "Brown Boots For True Cowboys",
    price: 65.65,
    sku: "6-004",
    model: 10488,
    onHand: 6,
    options: [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    auxCategory: "Boots"
  },
  {
    id: 5,
    name: "10% Cotton Blue Real Cowboy Shirt",
    price: 29.99,
    sku: "6-005",
    model: 19152,
    onHand: 13,
    options: ["S", "M", "L", "XL"],
    auxCategory: "Clothing"
  },
  {
    id: 6,
    name: "23% Cotton Black Real Cowboy Shirt",
    price: 29.98,
    sku: "6-006",
    model: 12291,
    onHand: 17,
    options: ["S", "M", "L", "XL"],
    auxCategory: "Clothing"
  },
  {
    id: 7,
    name: "100% Cotton Baby Blue Cowgirl Shirt",
    price: 24.97,
    sku: "6-007",
    model: 15740,
    onHand: 3,
    options: ["S", "M", "L", "XL"],
    auxCategory: "Clothing"
  },
  {
    id: 8,
    name: "Cowgirl Hat Rose Gold",
    price: 19,
    sku: "6-008",
    model: 15567,
    onHand: 20,
    options: [null],
    auxCategory: null
  },
  {
    id: 9,
    name: "Mens Longhorn Cowboy Hat",
    price: 23.45,

    sku: "6-009",
    model: 13164,
    onHand: 25,
    options: [null],
    auxCategory: null
  },
  {
    id: 10,
    name: "Boys Cowboy Outfit",
    price: 10.15,
    sku: "6-010",
    model: 6685,
    onHand: 12,
    options: ["S", "M", "L", "XL"],
    auxCategory: "Clothing"
  },
  {
    id: 11,
    name: "Girls Cowgirl Outfit",
    price: 12.69,
    sku: "6-011",
    model: 13594,
    onHand: 2,
    options: ["S", "M", "L", "XL"],
    auxCategory: "Clothing"
  },
  {
    id: 12,
    name: "Imaginary Unisex Western Outfit",
    price: 299.99,
    sku: "6-012",
    model: 15906,
    onHand: 17,
    options: ["S", "M", "L", "XL"],
    auxCategory: "Clothing"
  },
  {
    id: 13,
    name: "Brown Super Comfortable Poncho",
    price: 33.33,
    sku: "6-013",
    model: 16584,
    onHand: 8,
    options: ["S", "M", "L", "XL"],
    auxCategory: "Clothing"
  },
  {
    id: 14,
    name: "Western Tuxedo with Glasses",
    price: 125,
    sku: "6-014",
    model: 8679,
    onHand: 1,
    options: ["S", "M", "L", "XL"],
    auxCategory: "Clothing"
  },
  {
    id: 15,
    name: "Maroon Suit with Hat",
    price: 66.66,
    sku: "6-015",
    model: 13057,
    onHand: 10,
    options: ["S", "M", "L", "XL"],
    auxCategory: "Clothing"
  },
  {
    id: 16,
    name: "Taurus Necklace",
    price: 75.57,
    sku: "6-016",
    model: 8780,
    onHand: 19,
    options: [null],
    auxCategory: null
  },
  {
    id: 17,
    name: "Hold Your Horses T-Shirt 1000% Cotton",
    price: 20,
    sku: "6-017",
    model: 9781,
    onHand: 5,
    options: ["S", "M", "L", "XL"],
    auxCategory: "Clothing"
  },
  {
    id: 18,
    name: "Full Punchy Cowgirl Attire",
    price: 29.99,
    sku: "6-018",
    model: 10727,
    onHand: 0,
    options: [null],
    auxCategory: null
  },
  {
    id: 19,
    name: "Donkey T-Shirt 57% Cotton",
    price: 22.11,
    sku: "6-019",
    model: 9035,
    onHand: 13,
    options: ["S", "M", "L", "XL"],
    auxCategory: "Clothing"
  },
  {
    id: 20,
    name: "Cowboy Take Me Away",
    price: 14.41,
    sku: "6-020",
    model: 16474,
    onHand: 25,
    options: [null],
    auxCategory: null
  },
  {
    id: 21,
    name: "Yee Haw Cabin",
    price: 100000,
    sku: "7-001",
    model: 8407,
    onHand: 16,
    options: [null],
    auxCategory: null
  },
  {
    id: 22,
    name: "Super Log Cabin",
    price: 1,
    sku: "7-002",
    model: 19150,
    onHand: 25,
    options: [null],
    auxCategory: null
  },
  {
    id: 23,
    name: "Smelly Cabin",
    price: 0.01,
    sku: "7-003",
    model: 6378,
    onHand: 4,
    options: [null],
    auxCategory: null
  },
  {
    id: 24,
    name: "Boxy Cabin",
    price: 10,
    sku: "7-004",
    model: 13510,
    onHand: 15,
    options: [null],
    auxCategory: null
  },
  {
    id: 25,
    name: "Small Cabin",
    price: 1000,
    sku: "7-005",
    model: 9859,
    onHand: 4,
    options: [null],
    auxCategory: null
  },
  {
    id: 26,
    name: "Hot Cabin",
    price: 0.01,
    sku: "7-006",
    model: 19448,
    onHand: 0,
    options: [null],
    auxCategory: null
  },
  {
    id: 27,
    name: "Imaginary Cabin",
    price: 10000000,
    sku: "7-007",
    model: 10081,
    onHand: 15,
    options: [null],
    auxCategory: null
  },
  {
    id: 28,
    name: "Oops Cabin",
    price: 10,
    sku: "7-008",
    model: 14260,
    onHand: 16,
    options: [null],
    auxCategory: null
  },
  {
    id: 29,
    name: "Swimming Cabin",
    price: 100000,
    sku: "7-009",
    model: 12026,
    onHand: 24,
    options: [null],
    auxCategory: null
  },
  {
    id: 30,
    name: "Adaptable Cabin",
    price: 10000,
    sku: "7-010",
    model: 9120,
    onHand: 19,
    options: [null],
    auxCategory: null
  },
  {
    id: 31,
    name: "The Shining Cabin",
    price: 1000000,
    sku: "7-011",
    model: 5010,
    onHand: 7,
    options: [null],
    auxCategory: null
  },
  {
    id: 32,
    name: "Gates Cabin",
    price: 127000000,
    sku: "7-012",
    model: 11968,
    onHand: 16,
    options: [null],
    auxCategory: null
  },
  {
    id: 33,
    name: "Cabin in the woods",
    price: 100,
    sku: "7-013",
    model: 16378,
    onHand: 16,
    options: [null],
    auxCategory: null
  },
  {
    id: 34,
    name: "Ewok Cabins",
    price: 100000,
    sku: "7-014",
    model: 9290,
    onHand: 5,
    options: [null],
    auxCategory: null
  },
  {
    id: 35,
    name: "Artsy Cabin",
    price: 10,
    sku: "7-015",
    model: 11383,
    onHand: 25,
    options: [null],
    auxCategory: null
  },
  {
    id: 36,
    name: "Scary Cabin",
    price: 10000,
    sku: "7-016",
    model: 11818,
    onHand: 0,
    options: [null],
    auxCategory: null
  },
  {
    id: 37,
    name: "Log Cabin",
    price: 100,
    sku: "7-017",
    model: 12859,
    onHand: 24,
    options: [null],
    auxCategory: null
  },
  {
    id: 38,
    name: "Tree Cabin",
    price: 10000,
    sku: "7-018",
    model: 18788,
    onHand: 22,
    options: [null],
    auxCategory: null
  },
  {
    id: 39,
    name: "Wet Cabin",
    price: 1,
    sku: "7-019",
    model: 17902,
    onHand: 12,
    options: [null],
    auxCategory: null
  },
  {
    id: 40,
    name: "Remote Cabin",
    price: 10000,
    sku: "7-020",
    model: 19408,
    onHand: 22,
    options: [null],
    auxCategory: null
  },
  {
    id: 41,
    name: "Leather Saddle",
    price: 299.99,
    sku: "8-001",
    model: 17481,
    onHand: 14,
    options: ["S", "M", "L"],
    auxCategory: "Saddle"
  },
  {
    id: 42,
    name: "Fancy Saddle",
    price: 599.99,
    sku: "8-002",
    model: 12246,
    onHand: 0,
    options: ["S", "M", "L"],
    auxCategory: "Saddle"
  },
  {
    id: 43,
    name: "Daddy Saddle - Princess Pink",
    price: 19.99,
    sku: "8-003",
    model: 17527,
    onHand: 11,
    options: ["S", "M", "L"],
    auxCategory: "Saddle"
  },
  {
    id: 44,
    name: "Nerd Saddles (TM) - Batman Saddle",
    price: 199.99,
    sku: "8-004",
    model: 19785,
    onHand: 16,
    options: ["S", "M", "L"],
    auxCategory: "Saddle"
  },
  {
    id: 45,
    name: "XXL Lasso",
    price: 50,
    sku: "8-005",
    model: 9063,
    onHand: 16,
    options: [null],
    auxCategory: null
  },
  {
    id: 46,
    name: "Star Spangled Patriotic Onesie for the Equine in your life",
    price: 60,
    sku: "8-006",
    model: 16499,
    onHand: 23,
    options: [null],
    auxCategory: null
  },
  {
    id: 47,
    name: "Pool Horsies, 9-Pack",
    price: 10,
    sku: "8-007",
    model: 8928,
    onHand: 7,
    options: [null],
    auxCategory: null
  },
  {
    id: 48,
    name: "Imaginary Horse",
    price: 11999.99,
    sku: "8-008",
    model: 5008,
    onHand: 22,
    options: [null],
    auxCategory: null
  },
  {
    id: 49,
    name: "Horseshoes, 2-Pack - Rose Gold",
    price: 99.99,
    sku: "8-009",
    model: 9684,
    onHand: 20,
    options: [null],
    auxCategory: null
  },
  {
    id: 50,
    name: "Horseshoes, 2-Pack - Thoroughbred Red",
    price: 99.99,
    sku: "8-010",
    model: 19171,
    onHand: 7,
    options: [null],
    auxCategory: null
  },
  {
    id: 51,
    name: "Horseshoes, 2-Pack - Victory Violet",
    price: 99.99,
    sku: "8-011",
    model: 6107,
    onHand: 14,
    options: [null],
    auxCategory: null
  },
  {
    id: 52,
    name: "White Mare, 3-Pack",
    price: 9999.99,
    sku: "8-012",
    model: 16680,
    onHand: 9,
    options: [null],
    auxCategory: null
  },
  {
    id: 53,
    name: "Fly Mask With Ears - Grumpy Horse",
    price: 19.99,
    sku: "8-013",
    model: 12465,
    onHand: 10,
    options: [null],
    auxCategory: null
  },
  {
    id: 54,
    name: "My Little Ponies FurReal! - Pretty Pretty Pink (3-Pack)",
    price: 7999.99,
    sku: "8-014",
    model: 19344,
    onHand: 0,
    options: ["Cute", "Super Cute", "Mega Cute", "Ultra Cute"],
    auxCategory: "Horses"
  },
  {
    id: 55,
    name: "Coachella Flowers for Indie Foals",
    price: 24.99,
    sku: "8-015",
    model: 17155,
    onHand: 24,
    options: [null],
    auxCategory: null
  },
  {
    id: 56,
    name: "Brown Horse (Refurbished)",
    price: 99.99,
    sku: "8-016",
    model: 11440,
    onHand: 3,
    options: [null],
    auxCategory: null
  },
  {
    id: 57,
    name: "ShadowQuack (Meaning of Haste included)",
    price: 3999.99,
    sku: "8-017",
    model: 18938,
    onHand: 24,
    options: [null],
    auxCategory: null
  },
  {
    id: 58,
    name: "Gentleman Horse",
    price: 4999.99,
    sku: "8-018",
    model: 12913,
    onHand: 13,
    options: [null],
    auxCategory: null
  },
  {
    id: 59,
    name: "Swole Horse",
    price: 3499.99,
    sku: "8-019",
    model: 12201,
    onHand: 3,
    options: [null],
    auxCategory: null
  },
  {
    id: 60,
    name: "SmartHorse (parkable anywhere)",
    price: 2999.99,
    sku: "8-020",
    model: 14646,
    onHand: 4,
    options: [null],
    auxCategory: null
  },
  {
    id: 61,
    name: "Gold Rush Nugget Bucket Gold Panning Kit",
    price: 109.95,
    sku: "9-001",
    model: 15165,
    onHand: 8,
    options: [null],
    auxCategory: null
  },
  {
    id: 62,
    name: "SnakeArmor Snake Gaiters",
    price: 153.98,
    sku: "9-002",
    model: 19437,
    onHand: 2,
    options: [null],
    auxCategory: null
  },
  {
    id: 63,
    name: "SluiceFox Gold Panning Kit",
    price: 49,
    sku: "9-003",
    model: 7888,
    onHand: 21,
    options: [null],
    auxCategory: null
  },
  {
    id: 64,
    name: "Pickaxe",
    price: 15.99,
    sku: "9-004",
    model: 11790,
    onHand: 8,
    options: [null],
    auxCategory: null
  },
  {
    id: 65,
    name: "Gold Mining Ornament",
    price: 11.99,
    sku: "9-005",
    model: 13811,
    onHand: 1,
    options: [null],
    auxCategory: null
  },
  {
    id: 66,
    name: "Dynamite",
    price: 895,
    sku: "9-006",
    model: 16812,
    onHand: 6,
    options: [null],
    auxCategory: null
  },
  {
    id: 67,
    name: "Mud/Sifting Round Point Shovel",
    price: 84,
    sku: "9-007",
    model: 8241,
    onHand: 23,
    options: [null],
    auxCategory: null
  },
  {
    id: 68,
    name: "Wheelbarrow",
    price: 199.99,
    sku: "9-008",
    model: 6286,
    onHand: 2,
    options: [null],
    auxCategory: null
  },
  {
    id: 69,
    name: "Alaskan Yukon Gold Nuggets--1 Gram",
    price: 61.35,
    sku: "9-009",
    model: 15673,
    onHand: 19,
    options: [null],
    auxCategory: null
  },
  {
    id: 70,
    name: "Copper Lantern",
    price: 10.75,
    sku: "9-010",
    model: 15780,
    onHand: 23,
    options: [null],
    auxCategory: null
  },
  {
    id: 71,
    name: "Old Style Western Signs",
    price: 25.68,
    sku: "9-011",
    model: 13133,
    onHand: 15,
    options: [null],
    auxCategory: null
  },
  {
    id: 72,
    name: "Cowhide Area Rug",
    price: 18.99,
    sku: "9-012",
    model: 7941,
    onHand: 17,
    options: [null],
    auxCategory: null
  },
  {
    id: 73,
    name: "Cowboy Boot Toilet Brush Holder",
    price: 34.95,
    sku: "9-013",
    model: 16831,
    onHand: 19,
    options: [null],
    auxCategory: null
  },
  {
    id: 74,
    name: "Southwestern Steer Skull Wall Sculpture",
    price: 19.95,
    sku: "9-014",
    model: 9961,
    onHand: 0,
    options: [null],
    auxCategory: null
  },
  {
    id: 75,
    name: "Diamondback Rattlesnake Outdoor Statue",
    price: 21.66,
    sku: "9-015",
    model: 16791,
    onHand: 15,
    options: [null],
    auxCategory: null
  },
  {
    id: 76,
    name: "Mule Deer Antler Single Tier Chandelier",
    price: 1398,
    sku: "9-016",
    model: 6158,
    onHand: 7,
    options: [null],
    auxCategory: null
  },
  {
    id: 77,
    name: "Jesse James Wanted Poster",
    price: 12.99,
    sku: "9-017",
    model: 15527,
    onHand: 23,
    options: [null],
    auxCategory: null
  },
  {
    id: 78,
    name: "Western Shower Curtain",
    price: 19.99,
    sku: "9-018",
    model: 12321,
    onHand: 1,
    options: [null],
    auxCategory: null
  },
  {
    id: 79,
    name: "Drinking Chestnut Stallion Wine Bottle Holder",
    price: 24.95,
    sku: "9-019",
    model: 16833,
    onHand: 24,
    options: [null],
    auxCategory: null
  },
  {
    id: 80,
    name: "Prairie Rose Western Bronze Hand-Cast Wedding Cake Topper",
    price: 44.95,
    sku: "9-020",
    model: 13604,
    onHand: 25,
    options: [null],
    auxCategory: null
  },
  {
    id: 81,
    name: "Remington Rolling Block Rifle",
    price: 399.99,
    sku: "12-001",
    model: 14421,
    onHand: 24,
    options: ["20 Rounds", "50 Rounds", "100 Rounds"],
    auxCategory: "Guns"
  },
  {
    id: 82,
    name: "Winchester Model 1873 Rifle",
    price: 449.99,
    sku: "12-002",
    model: 10979,
    onHand: 24,
    options: ["20 Rounds", "50 Rounds", "100 Rounds"],
    auxCategory: "Guns"
  },
  {
    id: 83,
    name: "Remington Army Revolver",
    price: 499.99,
    sku: "12-003",
    model: 13298,
    onHand: 7,
    options: ["20 Rounds", "50 Rounds", "100 Rounds"],
    auxCategory: "Guns"
  },
  {
    id: 84,
    name: "Colt Model 1851 Navy Revolver",
    price: 349.99,
    sku: "12-004",
    model: 10473,
    onHand: 4,
    options: ["20 Rounds", "50 Rounds", "100 Rounds"],
    auxCategory: "Guns"
  },
  {
    id: 85,
    name: "Winchester Model 1895 Rifle",
    price: 349.99,
    sku: "12-005",
    model: 11632,
    onHand: 18,
    options: ["20 Rounds", "50 Rounds", "100 Rounds"],
    auxCategory: "Guns"
  },
  {
    id: 86,
    name: "Half-onHand Hawken Rifle",
    price: 399.99,
    sku: "12-006",
    model: 8232,
    onHand: 10,
    options: ["20 Rounds", "50 Rounds", "100 Rounds"],
    auxCategory: "Guns"
  },
  {
    id: 87,
    name: "Sharps Model 1853 Sporting Rifle",
    price: 299.99,
    sku: "12-007",
    model: 13690,
    onHand: 20,
    options: ["20 Rounds", "50 Rounds", "100 Rounds"],
    auxCategory: "Guns"
  },
  {
    id: 88,
    name: "Heavy Silver Chain Watch",
    price: 89.99,
    sku: "12-008",
    model: 8044,
    onHand: 18,
    options: [null],
    auxCategory: null
  },
  {
    id: 89,
    name: "Clark Stanleys Snake Oil",
    price: 4.99,
    sku: "12-009",
    model: 12415,
    onHand: 22,
    options: [null],
    auxCategory: null
  },
  {
    id: 90,
    name: "Cowboy Snuff Box",
    price: 7.99,
    sku: "12-010",
    model: 8501,
    onHand: 22,
    options: [null],
    auxCategory: null
  },
  {
    id: 91,
    name: "Billy Club",
    price: 24.99,
    sku: "12-011",
    model: 9224,
    onHand: 7,
    options: [null],
    auxCategory: null
  },
  {
    id: 92,
    name: "American Flask and Cap",
    price: 19.99,
    sku: "12-012",
    model: 7143,
    onHand: 4,
    options: [null],
    auxCategory: null
  },
  {
    id: 93,
    name: "German Silver Mounted Western Headstall",
    price: 24.99,
    sku: "12-013",
    model: 15779,
    onHand: 8,
    options: [null],
    auxCategory: null
  },
  {
    id: 94,
    name: "Tomahawk",
    price: 49.99,
    sku: "12-014",
    model: 12556,
    onHand: 22,
    options: [null],
    auxCategory: null
  },
  {
    id: 95,
    name: "Buffalo Ride",
    price: 28.99,
    sku: "12-015",
    model: 9080,
    onHand: 23,
    options: [null],
    auxCategory: null
  },
  {
    id: 96,
    name: "Hornady Custom Ammunition 405 Winchester",
    price: 12.99,
    sku: "12-016",
    model: 10454,
    onHand: 20,
    options: [null],
    auxCategory: null
  },
  {
    id: 97,
    name: "Hornady LEVERevolution .35 Remington Ammunition 20 Rounds",
    price: 11.99,
    sku: "12-017",
    model: 17375,
    onHand: 2,
    options: [null],
    auxCategory: null
  },
  {
    id: 98,
    name: "54 Caliber Ammunition",
    price: 14.99,
    sku: "12-018",
    model: 6409,
    onHand: 21,
    options: [null],
    auxCategory: null
  },
  {
    id: 99,
    name: "Tipi for one",
    price: 84.99,
    sku: "12-019",
    model: 7933,
    onHand: 24,
    options: [null],
    auxCategory: null
  },
  {
    id: 100,
    name: "Finger Pistol",
    price: 0,
    sku: "12-020",
    model: 15930,
    onHand: 19,
    options: [null],
    auxCategory: null
  }
];

module.exports = inventory;
