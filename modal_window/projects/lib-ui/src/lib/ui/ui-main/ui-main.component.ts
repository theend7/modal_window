import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'ui-main',
  templateUrl: './ui-main.component.html',
  styleUrls: ['./ui-main.component.scss']
})
export class UiMainComponent {

    @Output() public onabout: EventEmitter<any> = new EventEmitter<any>();
    @Output() public ondata: EventEmitter<any> = new EventEmitter<any>();
    constructor() { }

}
