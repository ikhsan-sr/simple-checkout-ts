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
    amount: 1,
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
    amount: 1,
  },
];

export interface CartItemType {
  data : {
    amount: number;
    name: string;
    type: {
      name: string;
      type: string;
    };
    image: string;
    size: string;
    price: number;
    note: string | null,
  };
  index: number;
}