import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CatalogoService {
  URL= 'http://localhost:3000/users';
  lista:any[]=[]
  constructor(private http:HttpClient) {
    console.log("Servicio funcionando");
  }
  consultabd():Observable<any>{
    return this.http.get(this.URL);
  }
  getprod(){
    return this.lista;
  }

}

