import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  public titulo: string;
  constructor(public alert: AlertController) { }

  ngOnInit() {
    this.titulo = 'Alert Page';
  }
  async presentAlert() {
    const alert = await this.alert.create({
      header: 'Alerta simple',
      subHeader: 'Subtitulo de alert',
      message: 'Se ha hecho tal o tal cosa.',
      buttons: ['Pos OK']
    });

    await alert.present();
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alert.create({
      header: '=O!',
      subHeader: 'Borrar no se que',
      message: 'Seguro que quieres borrar tal o tal cosa?',
      buttons: [
        'Cancelar', 
        'Borrar',
        //Aqui se pueden seguir declarando botones como un loco
      ]
    });

    await alert.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alert.create({
      header: 'Hecho!',
      message: 'Enviar mensaje <strong>?</strong>!!!',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertPrompt() {
    const alert = await this.alert.create({
      header: 'Prompt!',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Placeholder 1'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('clancelado');
          }
        }, {
          text: 'Ok',
          handler: (data) => {

            console.log(data.name1);
            this.ChangeTitle(data.name1);
          }
        }
      
      ]
    });
    await alert.present();
  }
private ChangeTitle(name:string){
  console.log(name);
  this.titulo = name;
}
}
