export interface ProductData {
  id: number;
  nama: string;
  harga: number;
  deskripsi: string;
  image: string;
  stock: number;
  type: string;
  quantity: number;
  copyWith(data: Partial<ProductData>): ProductData;
}

let idCounter = 1;

const readyDrink: ProductData[] = [
  {
    id: idCounter++,
    nama: "Anggur",
    harga: 9000,
    deskripsi:
      "Smooth, creamy and tangy. Perfect on its own or\nwith your favorite toppings.",
    image: "./product_img/anggurt_yogurt.webp",
    stock: 10,
    quantity: 0,
    type: "Ready Drink",
    copyWith(data: Partial<ProductData>): ProductData {
      return { ...this, ...data };
    },
  },
  {
    id: idCounter++,
    nama: "Leci",
    harga: 9000,
    deskripsi:
      "Smooth, creamy and tangy. Perfect on its own or\nwith your favorite toppings.",
    image: "./product_img/leci_yogurt.webp",
    stock: 10,
    quantity: 0,
    type: "Ready Drink",
    copyWith(data: Partial<ProductData>): ProductData {
      return { ...this, ...data };
    },
  },
  {
    id: idCounter++,
    nama: "Mangga",
    harga: 9000,
    deskripsi:
      "Smooth, creamy and tangy. Perfect on its own or\nwith your favorite toppings.",
    image: "./product_img/mangga_yogurt.webp",
    stock: 10,
    quantity: 0,
    type: "Ready Drink",
    copyWith(data: Partial<ProductData>): ProductData {
      return { ...this, ...data };
    },
  },
  {
    id: idCounter++,
    nama: "Melon",
    harga: 9000,
    deskripsi:
      "Smooth, creamy and tangy. Perfect on its own or\nwith your favorite toppings.",
    image: "./product_img/melon_yogurt.webp",
    stock: 10,
    quantity: 0,
    type: "Ready Drink",
    copyWith(data: Partial<ProductData>): ProductData {
      return { ...this, ...data };
    },
  },
  {
    id: idCounter++,
    nama: "Strawberry",
    harga: 9000,
    deskripsi:
      "Smooth, creamy and tangy. Perfect on its own or\nwith your favorite toppings.",
    image: "./product_img/strawberry_yogurt.webp",
    stock: 10,
    quantity: 0,
    type: "Ready Drink",
    copyWith(data: Partial<ProductData>): ProductData {
      return { ...this, ...data };
    },
  },
];

const stick: ProductData[] = [
  {
    id: idCounter++,
    nama: "Isi 3",
    harga: 9000,
    deskripsi:
      "Smooth, creamy and tangy. Perfect on its own or\nwith your favorite toppings.",
    image: "./product_img/stick_yogurt.webp",
    stock: 10,
    quantity: 0,
    type: "Stick",
    copyWith(data: Partial<ProductData>): ProductData {
      return { ...this, ...data };
    },
  },
  {
    id: idCounter++,
    nama: "Isi 10",
    harga: 18000,
    deskripsi:
      "Smooth, creamy and tangy. Perfect on its own or\nwith your favorite toppings.",
    image: "./product_img/stick_yogurt.webp",
    stock: 10,
    quantity: 0,
    type: "Stick",
    copyWith(data: Partial<ProductData>): ProductData {
      return { ...this, ...data };
    },
  },
  {
    id: idCounter++,
    nama: "Isi 30",
    harga: 25000,
    deskripsi:
      "Smooth, creamy and tangy. Perfect on its own or\nwith your favorite toppings.",
    image: "./product_img/stick_yogurt.webp",
    stock: 10,
    quantity: 0,
    type: "Stick",
    copyWith(data: Partial<ProductData>): ProductData {
      return { ...this, ...data };
    },
  },
];

const greekDrink250ml: ProductData[] = [
  {
    id: idCounter++,
    nama: "Anggur",
    harga: 12000,
    deskripsi:
      "Smooth, creamy and tangy. Perfect on its own or\nwith your favorite toppings.",
    image: "./product_img/anggurt_yogurt.webp",
    stock: 10,
    quantity: 0,
    type: "Greek Drink 250 ML",
    copyWith(data: Partial<ProductData>): ProductData {
      return { ...this, ...data };
    },
  },
  {
    id: idCounter++,
    nama: "Leci",
    harga: 12000,
    deskripsi:
      "Smooth, creamy and tangy. Perfect on its own or\nwith your favorite toppings.",
    image: "./product_img/leci_yogurt.webp",
    stock: 10,
    quantity: 0,
    type: "Greek Drink 250 ML",
    copyWith(data: Partial<ProductData>): ProductData {
      return { ...this, ...data };
    },
  },
  {
    id: idCounter++,
    nama: "Mangga",
    harga: 12000,
    deskripsi:
      "Smooth, creamy and tangy. Perfect on its own or\nwith your favorite toppings.",
    image: "./product_img/mangga_yogurt.webp",
    stock: 10,
    quantity: 0,
    type: "Greek Drink 250 ML",
    copyWith(data: Partial<ProductData>): ProductData {
      return { ...this, ...data };
    },
  },
  {
    id: idCounter++,
    nama: "Melon",
    harga: 12000,
    deskripsi:
      "Smooth, creamy and tangy. Perfect on its own or\nwith your favorite toppings.",
    image: "./product_img/melon_yogurt.webp",
    stock: 10,
    quantity: 0,
    type: "Greek Drink 250 ML",
    copyWith(data: Partial<ProductData>): ProductData {
      return { ...this, ...data };
    },
  },
  {
    id: idCounter++,
    nama: "Strawberry",
    harga: 12000,
    deskripsi:
      "Smooth, creamy and tangy. Perfect on its own or\nwith your favorite toppings.",
    image: "./product_img/strawberry_yogurt.webp",
    stock: 10,
    quantity: 0,
    type: "Greek Drink 250 ML",
    copyWith(data: Partial<ProductData>): ProductData {
      return { ...this, ...data };
    },
  },
];

const greekDrink1L: ProductData[] = [
  {
    id: idCounter++,
    nama: "Anggur",
    harga: 40000,
    deskripsi:
      "Smooth, creamy and tangy. Perfect on its own or\nwith your favorite toppings.",
    image: "./product_img/anggurt_yogurt.webp",
    stock: 10,
    quantity: 0,
    type: "Greek Drink 1 L",
    copyWith(data: Partial<ProductData>): ProductData {
      return { ...this, ...data };
    },
  },
  {
    id: idCounter++,
    nama: "Leci",
    harga: 40000,
    deskripsi:
      "Smooth, creamy and tangy. Perfect on its own or\nwith your favorite toppings.",
    image: "./product_img/leci_yogurt.webp",
    stock: 10,
    quantity: 0,
    type: "Greek Drink 1 L",
    copyWith(data: Partial<ProductData>): ProductData {
      return { ...this, ...data };
    },
  },
  {
    id: idCounter++,
    nama: "Mangga",
    harga: 40000,
    deskripsi:
      "Smooth, creamy and tangy. Perfect on its own or\nwith your favorite toppings.",
    image: "./product_img/mangga_yogurt.webp",
    stock: 10,
    quantity: 0,
    type: "Greek Drink 1 L",
    copyWith(data: Partial<ProductData>): ProductData {
      return { ...this, ...data };
    },
  },
  {
    id: idCounter++,
    nama: "Melon",
    harga: 40000,
    deskripsi:
      "Smooth, creamy and tangy. Perfect on its own or\nwith your favorite toppings.",
    image: "./product_img/melon_yogurt.webp",
    stock: 10,
    quantity: 0,
    type: "Greek Drink 1 L",
    copyWith(data: Partial<ProductData>): ProductData {
      return { ...this, ...data };
    },
  },
  {
    id: idCounter++,
    nama: "Strawberry",
    harga: 40000,
    deskripsi:
      "Smooth, creamy and tangy. Perfect on its own or\nwith your favorite toppings.",
    image: "./product_img/strawberry_yogurt.webp",
    stock: 10,
    quantity: 0,
    type: "Greek Drink 1 L",
    copyWith(data: Partial<ProductData>): ProductData {
      return { ...this, ...data };
    },
  },
];

export { readyDrink, stick, greekDrink250ml, greekDrink1L };