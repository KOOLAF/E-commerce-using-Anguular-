import { Component } from '@angular/core';
import { ICategory } from '../../models/i-category';
import { Iproduct } from '../../models/iproduct';
import { CategoriesService } from '../../services/categories.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiServicesService } from '../../services/api-services.service';
import { FormsModule } from '@angular/forms';
import { Productservice } from '../../services/productservice.service';

@Component({
  selector: 'app-update',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update.component.html',
  styleUrl: './update.component.css',
})
export class UpdateComponent {
  catList: ICategory[] = [] as ICategory[];
  product: Iproduct = {} as Iproduct;
  prodId: number = 0;

  constructor(
    private cser: CategoriesService,
    private router: Router,
    private PrdSer: Productservice,
    private api: ApiServicesService,
    private activateRouter: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.activateRouter.paramMap.subscribe((params) => {
      this.prodId = Number(params.get('id'));
      this.product = this.PrdSer.getProductById(this.prodId)!;
      console.log(this.PrdSer.getProductById(this.prodId));
    });
    this.cser.getAllCtegories().subscribe((data) => {
      this.catList = data;
    });
  }

  saveProduct() {
    console.log(this.product.id, this.product);

    this.api.editProductById(this.product.id, this.product).subscribe((res) => {
      this.router.navigateByUrl('/home');
    });
  }
}
