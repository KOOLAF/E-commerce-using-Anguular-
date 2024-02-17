import { FormsModule } from '@angular/forms';
import { ProductComponent } from '../product/product.component';
import { Iproduct } from '../../models/iproduct';
import { ICategory } from '../../models/i-category';
import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
@Component({
  selector: 'app-order',
  standalone: true,
  imports: [FormsModule, ProductComponent, CommonModule],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OrderComponent {
  selectedCatId: number = 1;
  cat: ICategory[];
  orderid: number = 1;
  tPrice: number = 0;
  vProductD!: Iproduct[];
  in: any;
  // myArray: { p: Iproduct; counter: number }[] = [];
  // @ViewChild(ProductComponent) prdCom!: ProductComponent;
  constructor() {
    this.cat = [
      {
        id: 1,
        name: 'mobile',
      },
      {
        id: 2,
        name: 'laptop',
      },
      {
        id: 3,
        name: 'tablet',
      },
    ];
    // this.myArray = this.prdCom.ordered;
    // console.log(this.myArray);
  }
}
