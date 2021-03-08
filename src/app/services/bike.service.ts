import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Bike } from '../interfaces/bike';
import { Observable } from 'rxjs'



@Injectable({
  providedIn: 'root'
})
export class BikeService {

  BASE_URL: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getBikes(): Observable<Bike[]>{
    return this.http.get<Bike[]>(`${this.BASE_URL}/bike`);
  }

  // getProduct(id: string): Observable<Bike>{
  //   return this.http.get<Bike>(`${this.BASE_URL}/product/${id}`);
  // }

  // createProduct(product: Bike): Observable<Bike> {
  //   return this.http.post<Bike>(`${this.BASE_URL}/product/create`, product);
  // }

  // deleteProduct(id: string): Observable<Bike> {
  //   console.log(id);
  //   return this.http.delete<Bike>(`${this.BASE_URL}/product/delete?productID=${id}`);
  // }

  // updateProduct(id: string, product: Bike): Observable<Bike> {
  //   return this.http.put<Bike>(`${this.BASE_URL}/bike/update?productID=${id}`, product);
  // }
}
