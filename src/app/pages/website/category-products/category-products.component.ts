import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-category-products',
  templateUrl: './category-products.component.html',
  styleUrls: ['./category-products.component.css']
})
export class CategoryProductsComponent {

  activeCategoryId:number=0;
  products:any[]=[];
  constructor(private activateRoute:ActivatedRoute,private prodServ:ProductService){

    this.activateRoute.params.subscribe((res:any)=>{
            
              this.activeCategoryId = res.id;
              this.LoadProduct();
    })
  }


   
  LoadProduct(){
    this.prodServ.getAllProductsByCategoryId(this.activeCategoryId).subscribe((res:any)=>{
     this.products=res.data;
    })
  }
 
}
