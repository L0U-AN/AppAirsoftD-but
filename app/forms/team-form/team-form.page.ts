import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-team-form',
  templateUrl: './team-form.page.html',
  styleUrls: ['./team-form.page.scss'],
})
export class TeamFormPage {
  teamName!: string;
  sloganTeam!: string;

  constructor(private modalController: ModalController) {}

  createTeam() {
    // Vous pouvez ajouter ici la logique pour enregistrer l'événement
    // par exemple, en utilisant un service ou une API pour sauvegarder les données.
    // Une fois l'événement enregistré, redirigez l'utilisateur vers la page de confirmation.
    // Par exemple :
    // this.eventService.createEvent({
    //   terrain: this.selectedTerrain,
    //   name: this.eventName,
    //   date: this.eventDate,
    //   time: this.eventTime,
    //   description: this.eventDescription,
    //   maxPlayers: this.maxPlayers,
    //   price: this.eventPrice,
    // }).subscribe(() => {
    //   this.router.navigate(['/event-confirmation']);
    // });
  }
}