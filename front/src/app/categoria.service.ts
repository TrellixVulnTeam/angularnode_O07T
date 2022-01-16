import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {
  
  listarCategorias(): Observable<any>{
    return this.http.get("http://localhost:3030/findAllCategory");
  }
  constructor(private http: HttpClient) { }
}
