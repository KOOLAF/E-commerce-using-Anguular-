import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root',
})
export class Productservice {
  products: Iproduct[];
  constructor() {
    this.products = [
      {
        id: 1,
        name: 'iphone',
        quantity: 0,
        price: 900,
        imageUrl: `https://i5.walmartimages.com/seo/Restored-Apple-iPhone-X-256GB-Factory-Unlocked-Smartphone-Refurbished_9b5ec8b2-9665-463b-adc5-64829ba72da6.1b496e5a8fcee76fdad69bae12b54745.jpeg`,
        ctgId: 1,
      },
      {
        id: 2,
        name: 'macBook',
        quantity: 1,
        price: 900,
        imageUrl: `https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/macbook-air-space-gray-select-201810?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1664472289661`,
        ctgId: 2,
      },
      {
        id: 3,
        name: 'hplaptop',
        quantity: 2,
        price: 1000,
        imageUrl: `data:image/jpeg;base64,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`,
        ctgId: 2,
      },
      {
        id: 4,
        name: 'tablet',
        quantity: 3,
        price: 2000,
        imageUrl:
          'https://m.media-amazon.com/images/I/71FSJ5PrZyL.__AC_SX300_SY300_QL70_ML2_.jpg',
        ctgId: 3,
      },
    ];
  }
  getAllProduct(): Iproduct[] {
    return this.products;
  }
  getProductById(id: number): Iproduct | null {
    let product = this.products.find((ele) => ele.id == id);

    return product ? product : null;
  }
  getProductByCatId(cid: number): Iproduct[] {
    return this.products.filter((ele) => ele.ctgId == cid);
  }
  getProductByIds(): number[] {
    return this.products.map((prd) => prd.id);
  }
}
