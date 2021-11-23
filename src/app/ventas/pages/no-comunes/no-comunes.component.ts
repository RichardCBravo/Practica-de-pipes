import { Component, ElementRef, ViewChild } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styleUrls: ['./no-comunes.component.scss']
})
export class NoComunesComponent  {

  @ViewChild('txtNombre') txtNombre!:ElementRef<HTMLInputElement>;
  @ViewChild('txtGenero') txtGenero!:ElementRef<HTMLInputElement>;

  nombre:string='Diana';
  genero:string="femenino"

  invitacionMap={
    'masculino':'invitarlo',
    'femenino': 'invitarla'
  }

  clientes:string[]=['Maria', 'Diana', 'Richard'];

  clientesMap={
    '=0':'No hay clientes',
    '=1': 'tenermos un cliente esperando',
    'other':'tenermos # clientes esperando'
  }

  cambiarPersona(){
    this.nombre = this.txtNombre.nativeElement.value;
    this.genero = this.txtGenero.nativeElement.value;

    this.txtNombre.nativeElement.value='';
    this.txtGenero.nativeElement.value='';
  }

  anadirPersona(){
    this.clientes.push(this.txtNombre.nativeElement.value);
    console.log(this.clientes);

    this.txtNombre.nativeElement.value='';
    this.txtGenero.nativeElement.value='';
  }
  
  borrarPersona(){
    this.clientes.shift();
  }

  //KeyValue Pipe

  persona = {
    nombe:'Richard',
    edad: 24,
    direccion:'Bogotá, Colombia'
  }

  //JSON Pipe

  heroes=[
    {
      nombre:'Spiderman',
      vuela: false
    },
    {
      nombre:'Goku',
      vuela: true
    },
    {
      nombre:'Naruto',
      vuela: false
    }
  ]

  // Async Pipe

  miObservable=interval(1000);

  valorPromesa = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}
