import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {

  items : MenuItem[]=[];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label:'Pipes Angular',
        icon: 'pi pi-arrow-down-right',
        items:[
          {
            label:'Básicos',
            icon:'pi pi-heart-fill',
            routerLink:'/'
          },
          {
            label:'Números',
            icon:'pi pi-heart-fill',
            routerLink:'numeros'
          },
          {
            label:'No Comunes',
            icon:'pi pi-heart-fill',
            routerLink:'nocomunes'
          }
        ]
      },
      {
        label:"Pipes personalizados",
        icon:'pi pi-cog',
        items:[
          {
            label:'Ordenar',
            icon:'pi pi-heart-fill',
            routerLink:'ordenar'
          }
        ]
      }
  ];
  }

}
