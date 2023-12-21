import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  
  insertUser(regapi:any){
    return this.http.post('https://retoolapi.dev/1yZepl/userreglogDate',regapi)
  }

  getUser(getapi:any){
    return this.http.get('https://retoolapi.dev/1yZepl/userreglogDate?'+getapi)
  }

}
