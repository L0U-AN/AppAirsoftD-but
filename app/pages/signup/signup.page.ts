import { Component } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage {
  // Variables pour stocker les informations de l'utilisateur
  username: string = '';
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthenticationService, private router: Router) {}

  // Fonction pour s'inscrire
  async signUp() {
    try {
      const user = await this.authService.registerUser(this.email, this.password, this.username);
      console.log('Inscription réussie!', user);
  
      // Rediriger vers la page d'accueil
      this.router.navigate(['/accueil']);
    } catch (error) {
      console.error('Erreur lors de l\'inscription', error);
      // Afficher l'erreur à l'utilisateur
      this.errorMessage = 'Erreur lors de l\'inscription. Veuillez réessayer.';
    }
  }
}
