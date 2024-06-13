import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrl: './connexion.component.css'
})
export class ConnexionComponent {

  myForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.myForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]] // Ajout du champ de mot de passe
    });
  }

  onSubmit() {
    console.log(this.myForm.value);
    if (this.myForm.valid) {
      console.log(this.myForm.value);
      // Rediriger vers le tableau de bord
      this.router.navigate(['/dashboard']);
    }
    
  
  }

}
