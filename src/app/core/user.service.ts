import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private role: string;

  constructor() {
    // Initialisation du rôle. Pour les tests, tu peux modifier cette valeur.
    this.role = 'ADMIN';  // 'ANONYMOUS', 'USER', ou 'ADMIN'
  }

  getRole(): string {
    // Renvoie le rôle actuel de l'utilisateur.
    return this.role;
  }

  setRole(role: string): void {
    // Met à jour le rôle de l'utilisateur. Utilisé pour tester différents scénarios d'accès.
    this.role = role;
  }
}
