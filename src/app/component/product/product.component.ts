import { Component, Input } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { CommonModule, NgStyle } from '@angular/common';
import { ICategory } from '../../models/i-category';
import { FormsModule } from '@angular/forms';
import { BorderShadowDirective } from '../../directive/border-shadow.directive';
import { Productservice } from '../../services/productservice.service';
import { Router } from '@angular/router';
import { ApiServicesService } from '../../services/api-services.service';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, FormsModule, BorderShadowDirective],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  Product: Iproduct[] = [] as Iproduct[];
  @Input() cat: ICategory[] = [] as ICategory[];
  selectedCatId: number = 1;
  quantity: number = 1;
  @Input() recId: number = 1;
  fillterdProduct: Iproduct[];
  constructor(private api: ApiServicesService, private router: Router) {
    this.fillterdProduct = this.Product;
  }
  ngOnInit() {
    this.api.getAllCategories().subscribe((data) => {
      this.cat = data;
    });
  }
  ngOnChanges(): void {
    console.log('change');

    this.api.getProductBycatId(this.recId).subscribe((data) => {
      this.fillterdProduct = data;
    });
  }
  detail(id: number) {
    this.router.navigateByUrl(`/details/${id}`);
  }
  deleteProduct(id: number) {
    this.api.deletProductById(id).subscribe((res) => {
      this.router.navigateByUrl('/home');
      this.api.getProductBycatId(this.recId).subscribe((data) => {
        this.fillterdProduct = data;
      });
    });
  }
  edit(id: number, prod: Iproduct) {
    this.api.editProductById(id, prod).subscribe((res) => {
      this.router.navigateByUrl(`/edit/${id}`);
    });
  }
}
