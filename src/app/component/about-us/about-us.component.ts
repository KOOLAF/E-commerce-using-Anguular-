import { Component } from '@angular/core';
import { PromAdsService } from '../../services/prom-ads.service';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {
  n: any;
  constructor(private promads: PromAdsService) {}
  ngOnInit() {
    this.promads.getAds().subscribe({
      next: (data) => {
        this.n = data; 
        console.log(this.n);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('Completed');
      },
    });
  }
}
