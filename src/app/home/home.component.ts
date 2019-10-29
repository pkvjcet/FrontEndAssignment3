import { Component, OnInit } from '@angular/core';
import {IProduct} from './product.model'
import {ApiService} from '../api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products:IProduct[];
  imageWidth: number=50;
  imageMargin: number=2;
  hidevisible: string="visible";
  buttonname="Hide Image";
  flag=0;
  constructor(private api:ApiService) { }
  ngOnInit() {
      this.api.getProducts().subscribe((response)=>{
          this.products=JSON.parse(JSON.stringify(response))
      })
  }
  hideImage(){
    if(this.flag==1){      
      this.flag=0;
      this.hidevisible="visible";
      this.buttonname="Hide Image";
    }
    else if(this.flag==0){      
      this.flag=1;
      this.hidevisible="hidden";
      this.buttonname="Show Image"
    }
  }
  deleteProduct(id){
    this.api.deleteProduct(id).subscribe((response)=>{
      this.products=JSON.parse(JSON.stringify(response));
    })
    
  }

}
