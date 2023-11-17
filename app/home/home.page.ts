import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ScrollDetail } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  alertButtons = ['Action'];

  constructor(private alertController: AlertController) {}

  async presentAlert() {
    console.log('La fonction presentAlert est appelée.');
    
    const alert = await this.alertController.create({
      header: 'A Short Title Is Best',
      subHeader: 'A Sub Header Is Optional',
      message: 'A message should be a short, complete sentence.',
      buttons: this.alertButtons
    });
  
    await alert.present();
  }

  /*handleScrollStart() {
    console.log('scroll start');
  }

  handleScroll(ev: CustomEvent<ScrollDetail>) {
    console.log('scroll', JSON.stringify(ev.detail));
  }

  handleScrollEnd() {
    console.log('scroll end');
  }
  */
}
