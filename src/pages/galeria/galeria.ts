import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-galeria',
  templateUrl: 'galeria.html'
})
export class GaleriaPage {

  imagenes = [
    'https://mmtstock.com/wp-content/uploads/2017/09/P7040338.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/09/P6290012.jpg',
    'https://mmtstock.com/wp-content/uploads/2015/08/IMG_0903150810.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/12/P8310900.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/12/P8310865.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/12/P6290042.jpg',
    'https://mmtstock.com/wp-content/uploads/2017/11/P9031121.jpg'
  ];

  imagen_actual: string;
  indice: number;
  tamano: number;

  paginador_ini = 0;
  paginador_fin = 3;
  paginador_num = 3;

  constructor(public navCtrl: NavController) {
    this.indice = 0;
    this.imagen_actual = this.imagenes[this.indice];
    this.tamano = 400;

    // const that = this;
    // setInterval(function(){
    //   that.siguiente();
    // }, 1000);

  }

  seleccionar(indice){
    this.indice = indice;
    this.imagen_actual = this.imagenes[this.indice ];
  }

  anterior() {
    this.indice = this.indice - 1;
    this.imagen_actual = this.imagenes[this.indice ];
  }

  siguiente() {
    this.indice = this.indice + 1;
    this.imagen_actual = this.imagenes[this.indice ];
  }

  siguientePagina() {
    this.paginador_ini += this.paginador_num;
    this.paginador_fin += this.paginador_num;
  }




}
