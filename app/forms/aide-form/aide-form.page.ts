import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-aide-form',
  templateUrl: './aide-form.page.html',
  styleUrls: ['./aide-form.page.scss'],
})
export class AideFormPage {
  objetName!: string;
  aideDescription!: string;

  constructor(private modalController: ModalController) {}

  createAide() {
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