import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproduct } from '../models/iproduct';
import { environment } from '../../environments/environment.development';
import { ICategory } from '../models/i-category';

@Injectable({
  providedIn: 'root',
})
export class ApiServicesService {
  constructor(private httpClient: HttpClient) {}
  getAllProducts(): Observable<Iproduct[]> {
    return this.httpClient.get<Iproduct[]>('http://localhost:3000/products');
  }
  getProductById(id: number): Observable<Iproduct> {
    return this.httpClient.get<Iproduct>(
      `http://localhost:3000/products/${id}`
    );
  }
  getProductBycatId(catId: number): Observable<Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(
      `${environment.baseUrl}/products?ctgId=${catId}`
    );
  }
  deletProductById(id: number): Observable<Iproduct> {
    return this.httpClient.delete<Iproduct>(
      `${environment.baseUrl}/products/${id}`
    );
  }
  editProductById(id: Number, obj: Iproduct): Observable<Iproduct> {
    return this.httpClient.patch<Iproduct>(
      `${environment.baseUrl}/products/${id}`,
      obj
    );
  }
  getAllCategories(): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>(
      `${environment.baseUrl}/categories`
    );
  }
  addNewProduct(prd: Iproduct): Observable<Iproduct> {
    return this.httpClient.post<Iproduct>(
      `${environment.baseUrl}/products`,
      JSON.stringify(prd),
      {
        headers: {
          'content-type': 'application/json',
        },
      }
    );
  }
}
