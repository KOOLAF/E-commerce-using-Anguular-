import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PromAdsService {
  ads: String[];
  constructor() {
    this.ads = [
      'https://png.pngtree.com/png-clipart/20220307/original/pngtree-25-discount-png-png-image_7424248.png',
      'https://png.pngtree.com/png-vector/20230222/ourlarge/pngtree-10-discount-price-tag-png-image_6614209.png',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8GTf4z1UhcKOFmvMl7s7B_RuTp8iPaJzTW2TKP50IGpltyPcfuqFrqYp_syvMZD_lH8o&usqp=CAU',
      'https://png.pngtree.com/png-vector/20221230/ourlarge/pngtree-15-percent-discount-stamp-png-image_6541271.png',
    ];
  }
  getAds() {
    return new Observable<String>((observer) => {
      let i = 0;
      setInterval(() => {
        if (i == this.ads.length) {
          observer.complete();
        }

        observer.next(this.ads[i]);
        i++;
      }, 2000);
    });
  }
}
