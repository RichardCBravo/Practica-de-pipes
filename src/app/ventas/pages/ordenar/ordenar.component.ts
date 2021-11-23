import { Component} from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventan.interface';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styleUrls: ['./ordenar.component.scss']
})
export class OrdenarComponent {

  enmayusculas:boolean=false;
  ordenarPor:string='';

  heroes:Heroe[]=[
    {
      nombre:'Superman',
      vuela:true,
      color: Color.azul
    },
    {
      nombre:'Batman',
      vuela:false,
      color: Color.negro
    },
    {
      nombre:'Mujer Maravilla',
      vuela:false,
      color: Color.rojo
    },
    {
      nombre:'Linterna Verde',
      vuela:true,
      color: Color.verde
    }
  ];
  toggleMayuscolas(){
    this.enmayusculas=!this.enmayusculas;
  }

  cambiarOrdenar(ordenPor:string){
    this.ordenarPor=ordenPor;
  }


}
