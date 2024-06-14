import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouterLink } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class YService {

  constructor(private https: HttpClient, private route: Router) { }
  
  connextion( nom :string, email: string, password: string, tel:number){
    let administrateur = { 
    "nom":nom,
    "email":email,
    "password": password,
    "tel": tel
    }
    const header = new HttpHeaders({
      contentType:'application/json'
    })
    this.https.post('http://localhost:3000/admin/signup',administrateur,{headers:header}).subscribe(
      (data)=>{
        console.log(data);
        localStorage.setItem('userdata', JSON.stringify(data));
       this.route.navigate(['/dashboard']);
        
      }
    )
    


  }
}
