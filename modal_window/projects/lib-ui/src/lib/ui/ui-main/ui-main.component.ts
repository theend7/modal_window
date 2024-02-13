import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ui-main',
  templateUrl: './ui-main.component.html',
  styleUrls: ['./ui-main.component.scss']
})
export class UiMainComponent {

    @Output() public onopen: EventEmitter<any> = new EventEmitter<any>();
    constructor() { }

}
