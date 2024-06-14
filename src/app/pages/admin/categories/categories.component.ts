import { Component } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Observable,map} from 'rxjs';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {

  categoryList$: Observable<any>|undefined;
  constructor(private prodser:ProductService){
    this.categoryList$=this.prodser.getCategory().pipe(
      map((item:any)=>{
        return item.data;
      })
    )
  }


    
  
  }


