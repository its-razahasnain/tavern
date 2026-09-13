export interface FullMenuItem {
  name: string;
  description: string;
  price: string;
  featured?: boolean;
}

export interface MenuCategory {
  id: string;
  number: string;
  name: string;
  description: string;
  items: FullMenuItem[];
}

export const fullMenu: MenuCategory[] = [
  {
    id: "small-plates",
    number: "01",
    name: "Small Plates",
    description:
      "A few things to start the table right.",
    items: [
      {
        name: "Crispy Chicken Wings",
        description:
          "Smoked paprika, garlic butter, herbs, and Tavern hot sauce.",
        price: "1,650",
      },
      {
        name: "Charred Halloumi",
        description:
          "Grilled halloumi, honey, toasted sesame, and fresh herbs.",
        price: "1,450",
      },
      {
        name: "Truffle Fries",
        description:
          "Crispy potatoes, parmesan, truffle oil, and sea salt.",
        price: "1,250",
      },
      {
        name: "Loaded Tavern Nachos",
        description:
          "Corn chips, aged cheddar, jalapeño, salsa, sour cream, and guacamole.",
        price: "1,550",
      },
    ],
  },
  {
    id: "mains",
    number: "02",
    name: "Mains",
    description:
      "Comforting plates, made with good ingredients and plenty of care.",
    items: [
      {
        name: "The Tavern Burger",
        description:
          "Charred beef, aged cheddar, caramelized onion, and our house sauce.",
        price: "2,450",
        featured: true,
      },
      {
        name: "Crispy Chicken Burger",
        description:
          "Buttermilk chicken, shredded lettuce, pickles, and Tavern mayo.",
        price: "2,250",
      },
      {
        name: "Tavern Chicken",
        description:
          "Roasted chicken breast, garlic mash, seasonal vegetables, and pan jus.",
        price: "2,650",
      },
      {
        name: "Slow-Cooked Lamb",
        description:
          "Tender lamb shoulder, rosemary jus, roasted vegetables, and herb potatoes.",
        price: "3,250",
      },
    ],
  },
  {
    id: "grill",
    number: "03",
    name: "From the Grill",
    description:
      "Open-fire cooking, prime cuts, and nothing to hide behind.",
    items: [
      {
        name: "Wood-Fired Steak",
        description:
          "Prime cut, open-fire grilled and finished with herb butter.",
        price: "4,950",
        featured: true,
      },
      {
        name: "Grilled Lamb Chops",
        description:
          "Charred lamb, rosemary, roasted garlic, and mint jus.",
        price: "4,250",
      },
      {
        name: "Black Pepper Tenderloin",
        description:
          "Beef tenderloin, cracked pepper crust, truffle mash, and red wine jus.",
        price: "5,250",
      },
      {
        name: "Grilled Salmon",
        description:
          "Fire-grilled salmon, lemon herb butter, greens, and roasted potatoes.",
        price: "3,450",
      },
    ],
  },
  {
    id: "pasta",
    number: "04",
    name: "Pasta",
    description:
      "Handmade, comforting, and best enjoyed slowly.",
    items: [
      {
        name: "Truffle Pasta",
        description:
          "Silky handmade pasta, wild mushrooms, parmesan, and black truffle.",
        price: "2,850",
        featured: true,
      },
      {
        name: "Spicy Vodka Rigatoni",
        description:
          "Rigatoni, tomato vodka sauce, parmesan, chili, and fresh basil.",
        price: "2,350",
      },
      {
        name: "Wild Mushroom Tagliatelle",
        description:
          "Hand-cut pasta, forest mushrooms, garlic, thyme, and parmesan.",
        price: "2,450",
      },
      {
        name: "Slow-Cooked Beef Ragu",
        description:
          "Fresh pappardelle, braised beef, tomato, herbs, and aged parmesan.",
        price: "2,650",
      },
    ],
  },
  {
    id: "desserts",
    number: "05",
    name: "Desserts",
    description:
      "Something sweet before the last drink.",
    items: [
      {
        name: "Tavern Chocolate",
        description:
          "Dark chocolate, sea salt, vanilla cream, and a warm cocoa center.",
        price: "1,450",
        featured: true,
      },
      {
        name: "Sticky Toffee Pudding",
        description:
          "Warm date pudding, toffee sauce, vanilla ice cream, and sea salt.",
        price: "1,350",
      },
      {
        name: "Classic Crème Brûlée",
        description:
          "Silky vanilla custard with a crisp caramelized sugar top.",
        price: "1,250",
      },
      {
        name: "Basque Cheesecake",
        description:
          "Burnt-top cheesecake, berry compote, and vanilla cream.",
        price: "1,350",
      },
    ],
  },
  {
    id: "drinks",
    number: "06",
    name: "Drinks",
    description:
      "Classic pours, thoughtful cocktails, and something for every mood.",
    items: [
      {
        name: "Tavern Old Fashioned",
        description:
          "Bourbon, bitters, orange, and a touch of demerara.",
        price: "1,650",
      },
      {
        name: "Smoked Negroni",
        description:
          "Gin, bitter orange, vermouth, and our house smoke infusion.",
        price: "1,550",
      },
      {
        name: "Tavern Sour",
        description:
          "Whiskey, lemon, honey, bitters, and a soft citrus finish.",
        price: "1,450",
      },
      {
        name: "Classic Mojito",
        description:
          "White rum, fresh mint, lime, sugar, and sparkling water.",
        price: "1,350",
      },
      {
        name: "House Lemonade",
        description:
          "Fresh lemon, mint, citrus syrup, and sparkling water.",
        price: "750",
      },
      {
        name: "Ginger & Lime Fizz",
        description:
          "Fresh ginger, lime, honey, and chilled sparkling water.",
        price: "750",
      },
    ],
  },
];