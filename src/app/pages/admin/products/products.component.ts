import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

  isSidePanelVisible:boolean=false;

  productObj:any={
    
      "productId": 0,
      "productSku": '',
      "productName": '',
      "productPrice": 0,
      "productShortName": '',
      "productDescription": '',
      "createdDate": new Date(),
      "deliveryTimeSpan": '',
      "categoryId":0,
      "productImageUrl": ''
  }
  categoryList:any[]=[];
  productList:any[]=[];

  constructor(private prodServ:ProductService){}
  
ngOnInit(){
  this.getAllCategory();
  this.getProduct();

}

getAllCategory(){
  this.prodServ.getCategory().subscribe((res:any)=>{
      this.categoryList = res.data;
  })
}

getProduct(){
  this.prodServ.getProduct().subscribe((res:any)=>{
      //console.log(res);
       this.productList=res.data;
  })
}
  openSidePanel(){
    this.isSidePanelVisible=true;
  }
  closeSidePanel(){
    this.isSidePanelVisible=false;
  }
  
onSave(){
    this.prodServ.saveProduct(this.productObj).subscribe((res:any)=>{
      if(res.result){
        alert('Product Create Succesfully');
        this.getProduct();
      }
      else
      {
        alert(res.message);
      }
    })
}

onEdit(item:any)
{
  this.productObj=item;
  this.openSidePanel();
}
onUpdate(){
  this.prodServ.updateProduct(this.productObj).subscribe((res:any)=>{
    if(res.result){
      alert('Product updated successfully')
    }
    else
    {
      alert(res.message)
    }
  })
}

onDelete(item:any){
  let bit=confirm('Are you sure you want to delete this')
  if(bit){
    return this.prodServ.deleteProduct(item.productId).subscribe((res:any) =>{
      if(res.result){
        alert('Product deleted successfully')
        this.getProduct();
      }
      else
      {
        alert(res.message)
      }
    })
  
  }
  else
  {
    return;
  }
}

}
