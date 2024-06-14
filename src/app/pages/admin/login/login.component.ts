import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginObj:any={
    userName:'',
    password:''
  }
constructor(private route:Router){}

onLogin(){
    if(this.loginObj.userName=='admin' && this.loginObj.password=='admin'){
      this.route.navigateByUrl('/products')
    }
    else
    alert('Wrong Credentials');
  }

}
