import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-web-products',
  templateUrl: './web-products.component.html',
  styleUrls: ['./web-products.component.css']
})
export class WebProductsComponent {

  products:any []=[];

  constructor(public prodSer:ProductService){
    this.getAllProducts();
  }

  getAllProducts(){
    this.prodSer.getProduct().subscribe((res:any)=>{
      this.products = res.data;
    })

  }

}
