import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  componentes: Componente [] = [
    {
      icon: 'american-football',
      name: 'Action Sheet',
      redirectTo: '/action-sheet'
    },
    {
      icon: 'bulb-outline',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'bicycle-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'attach-outline',
      name: 'Botones',
      redirectTo: '/botones'
    },
    {
      icon: 'card',
      name: 'Cards',
      redirectTo: '/card'
    }

  ];
  constructor() { }

  ngOnInit() {
  }
  
}
interface Componente{
    icon:string;
    name:string;
    redirectTo:string;
}
