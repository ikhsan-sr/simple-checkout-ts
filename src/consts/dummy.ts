export const DATA_CART = [
  {
    name: 'Blue Denim Shirt',
    type: {
      name: 'shirt',
      type: 'Blue',
    },
    image: '/images/blue.jpeg',
    size: 'M',
    price: 17.99,
    note: 'Note, 1 place',
  },
  {
    name: 'Red Hoodie',
    type: {
      name: 'Hoodie',
      type: 'Red',
    },
    image: '/images/red.jpeg',
    size: 'M',
    price: 35.99,
    note: null,
  },
];

export interface CartItemType {
  data : {
    name: string;
    type: {
      name: string;
      type: string;
    };
    image: string;
    size: string;
    price: number;
    note: string | null,
  }
}