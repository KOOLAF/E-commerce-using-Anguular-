import { Component, OnInit } from '@angular/core';
import { ICategory } from '../../models/i-category';
import { CategoriesService } from '../../services/categories.service';
import { Iproduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';
import { ApiServicesService } from '../../services/api-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css',
})
export class AddProductComponent implements OnInit {
  catList: ICategory[] = [] as ICategory[];
  product: Iproduct = {} as Iproduct;

  constructor(
    private cser: CategoriesService,
    private router: Router,
    private api: ApiServicesService
  ) {}
  ngOnInit(): void {
    this.cser.getAllCtegories().subscribe((data) => {
      this.catList = data;
    });
  }
  addNewProduct() {
    this.api.addNewProduct(this.product).subscribe((res) => {
      this.router.navigateByUrl('/home');
    });
  }
  saveProduct() {
    console.log(this.product.id, this.product);

    // this.api.editProductById(this.product.id, this.product).subscribe((res) => {
    // this.router.navigateByUrl('/home');
    // });
  }
}
