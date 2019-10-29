import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get("https://princeproductdetails.herokuapp.com/products")
  }
  deleteProduct(id){
    return this.http.post("https://princeproductdetails.herokuapp.com/delete",{"id":id})
  }
  addNewProduct(item){
    return this.http.post("https://princeproductdetails.herokuapp.com/insert",{"product":item})
  }
}
