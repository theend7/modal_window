import { Component, Input } from '@angular/core';

@Component({
    selector: 'modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

    @Input() public title: string = '';

    constructor() { return; }

    private _close(): void {
        console.log('modal close');
    }

    public ui = {
        h: {
            close: this._close.bind(this)
        }
    }
}
