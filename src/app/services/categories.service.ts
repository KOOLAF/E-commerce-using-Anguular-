import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from '../models/i-category';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class CategoriesService {
  constructor(private httpClient: HttpClient) {}
  getAllCtegories(): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>(
      `${environment.baseUrl}/categories`
    );
  }
}
