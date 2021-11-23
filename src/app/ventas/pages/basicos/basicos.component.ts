import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styleUrls: ['./basicos.component.scss']
})
export class BasicosComponent {

  nombreLower:string = 'richard';
  nombreUpper:string= 'RICHARD';
  nombreCompleto:string= 'rIcHaRd BrAvO'

  fecha:Date=new Date();

}
