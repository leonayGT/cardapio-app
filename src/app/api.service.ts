import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public cardapio: string = 'http://localhost:3000/cardapio'
  constructor(private http: HttpClient) { }

  getCardapio(): Promise<any[]> {
    return this.http.get(this.cardapio)
    .toPromise()
    .then((data:any) => data)
  }
}

