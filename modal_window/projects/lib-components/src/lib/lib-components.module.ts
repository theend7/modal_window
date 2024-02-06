import { NgModule } from '@angular/core';

import { ModalComponent } from './components/modal/modal.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    BrowserModule
  ],
  exports: [
    ModalComponent
  ]
})
export class LibComponentsModule { }

export {
    ModalComponent
}
