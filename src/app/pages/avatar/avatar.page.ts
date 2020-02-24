import { Component, OnInit } from '@angular/core';
import { AlertComponent } from '../../components/alert/alert.component';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.page.html',
  styleUrls: ['./avatar.page.scss'],
})
export class AvatarPage implements OnInit {
  
  titulo: string;
  alertComp: AlertComponent;

  avatares:Avatares[] = [
    {
      name: 'Alex',
      slot: 'start',
      src: 'https://www.gestoriarueda.es/wp-content/uploads/2016/09/duplicado-del-carnet-de-conducir.jpg',
      borderRadius:''
    }
  ]

  constructor() { 
    
  }

  ngOnInit() {
    this.titulo = 'Avatar';    
  }

  async llamarAlert(nombre:string){
    var asdf: any = await this.alertComp.presentAlert('Quien es?',nombre,'asdf',['Ok']);
  }
}
interface Avatares{
  src:string;
  name:string;
  slot:string;
  borderRadius:string;
}
