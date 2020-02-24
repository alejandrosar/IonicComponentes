import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
})
export class AlertComponent implements OnInit {

  constructor(public alert: AlertController) { }

  ngOnInit() {}
  async presentAlert(headerT:string,subHeaderT:string,messageT:string,buttonsArr:string[]) {
    const alert = await this.alert.create({
      header: headerT,
      subHeader: subHeaderT,
      message: messageT,
      buttons: buttonsArr
    });

    await alert.present();
  }
}
