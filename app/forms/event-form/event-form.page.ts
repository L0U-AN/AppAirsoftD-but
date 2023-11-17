import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-event-form',
  templateUrl: './event-form.page.html',
  styleUrls: ['./event-form.page.scss'],
})
export class EventFormPage {
  selectedTerrain!: string;
  eventName!: string;
  eventDate!: string;
  eventTime!: string;
  eventDescription!: string;
  maxPlayers!: number;
  eventPrice!: number;

  constructor(private modalController: ModalController) {}

  async openDatetimeModal() {
    const modal = await this.modalController.create({
      component: 'ion-datetime', // Le nom du composant Ionic DateTime
      componentProps: {
        id: 'datetime',
        displayFormat: 'hh:mm A',
        value: this.eventTime, // Pour lier la valeur sélectionnée à votre modèle
      },
    });

    await modal.present();
  }
  createEvent() {
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
