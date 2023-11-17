import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireModule } from '@angular/fire/compat';

// Importez votre service d'authentification
import { AuthenticationService } from './services/authentication.service';

const firebaseConfig = {
  apiKey: "AIzaSyBGFWGnXec__uRzJwBj874fBcmkaYVzDpY",
      authDomain: "auth-example-1d20d.firebaseapp.com",
      projectId: "auth-example-1d20d",
      storageBucket: "auth-example-1d20d.appspot.com",
      messagingSenderId: "37204377123",
      appId: "1:37204377123:web:4cebdfa3efe98902b33b96"// Ajoutez ici la configuration Firebase, telle que votre apiKey, authDomain, etc.
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    FormsModule,
    AngularFirestoreModule,
    AngularFireModule.initializeApp(firebaseConfig), // Ajoutez cela pour configurer AngularFire
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthenticationService, // Ajoutez votre service ici
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
