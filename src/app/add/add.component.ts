import { Component, OnInit } from '@angular/core';
import { IProduct } from '../home/product.model';
import {ApiService} from '../api.service'
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class ADDComponent implements OnInit {
  productItem=new IProduct(null,null,null,null,null,null,null,null);
  constructor(private api:ApiService) { }

  ngOnInit() {
  }
  addProduct(){
     console.log(this.productItem.productId);
     this.api.addNewProduct(this.productItem).subscribe((data)=>{
        alert(JSON.parse(JSON.stringify(data)));
     });
     alert("Added Successfully..");
}
}
