import { NgModule } from '@angular/core';

import { ModalComponent } from './components/modal/modal.component';
import { BrowserModule } from '@angular/platform-browser';
import { AboutComponent } from './components/about/about.component';
import { DataComponent } from './components/data/data.component';



@NgModule({
  declarations: [
    ModalComponent,
    AboutComponent,
    DataComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    ModalComponent,
    AboutComponent,
    DataComponent
  ]
})
export class LibComponentsModule { }

export {
    ModalComponent,
    AboutComponent,
    DataComponent
}
