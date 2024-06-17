import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit  {

  categoryList:any[]=[];

  constructor(private prodServ:ProductService,private route:Router){}

  ngOnInit(){
    
    this.getAllCategories();
    this.route.navigateByUrl('/Allproducts');
  }

  getAllCategories(){
     this.prodServ.getCategory().subscribe((res:any)=>{

      console.log(res);
      this.categoryList=res.data;

     })
  }

  navigateToProduct(id:any){
    debugger;
    this.route.navigate(['/products',id])
  }

}
