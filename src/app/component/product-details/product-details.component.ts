import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Productservice } from '../../services/productservice.service';
import { Iproduct } from '../../models/iproduct';
import { FormControl, FormsModule } from '@angular/forms';
import { CommonModule, Location } from '@angular/common';
import { ApiServicesService } from '../../services/api-services.service';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent {
  prodId: number = 0;
  product: Iproduct | null = null;
  constructor(
    private activateRouter: ActivatedRoute,
    private PrdSer: Productservice,
    private Api: ApiServicesService,
    private locaction: Location,
    private router: Router
  ) {}
  ngOnInit() {
    // this.activateRouter.paramMap.subscribe((params) => {
    //   this.prodId = Number(params.get('id'));
    //   this.product = this.Api.getProductById(this.prodId);
    //   console.log(this.Api.getProductById(this.prodId));
    // });
    this.activateRouter.paramMap.subscribe((params) => {
      this.prodId = Number(params.get('id'));
      this.Api.getProductById(this.prodId).subscribe({
        next: (res) => (this.product = res),
      });
    });
  }
  goBack() {
    this.locaction.back();
  }
  pre() {
    let prdsId = this.PrdSer.getProductByIds();
    let index = prdsId.indexOf(this.prodId);
    this.router.navigateByUrl(`/details/${prdsId[--index]}`);
  }
}
