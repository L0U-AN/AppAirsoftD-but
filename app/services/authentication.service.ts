import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(
    public ngFireAuth: AngularFireAuth,
    private firestore: AngularFirestore
  ) {}

  async registerUser(email: string, password: string, username: string) {
    try {
      const result = await this.ngFireAuth.createUserWithEmailAndPassword(
        email,
        password
      );
      // Enregistrez le profil de l'utilisateur dans Firestore
      await this.firestore.collection('users').doc(result.user?.uid).set({
        email,
        username,
      });
      return result;
    } catch (error) {
      throw error;
    }
  }

  async loginUser(email: string, password: string) {
    return await this.ngFireAuth.signInWithEmailAndPassword(email, password);
  }

  async resetPassword(email: string) {
    return await this.ngFireAuth.sendPasswordResetEmail(email);
  }

  async signOut() {
    return await this.ngFireAuth.signOut();
  }

  async getProfile() {
    const user = await this.ngFireAuth.currentUser;
    if (user) {
      const userDoc = await this.firestore.collection('users').doc(user.uid).get().toPromise();
      if (userDoc && userDoc.exists) {
        // Utilisez Object.assign pour éviter les problèmes avec TypeScript
        return Object.assign({ uid: user.uid }, userDoc.data());
      }
    }
    return null;
  }
  
}

