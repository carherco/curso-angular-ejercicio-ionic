import { Component } from '@angular/core';

import { CalcPage } from "../calc/calc";
import { GaleriaPage } from "../galeria/galeria";
import { EditPage } from "../edit/edit";
import { ListadoPage } from "../listado/listado";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CalcPage;
  tab2Root = GaleriaPage;
  tab3Root = ListadoPage;
  tab4Root = EditPage;

  constructor() {

  }
}
