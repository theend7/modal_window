import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent {

    @Input() public title: string = '';
    @Output() public onclose: EventEmitter<void> = new EventEmitter<void>();

    constructor() { return; }

    private _outside(event: MouseEvent): void {
        if (!event) return;
        if (!event.target) return;
        const element: HTMLElement = event.target as HTMLElement;
        if (!element) return;
        if (!element.dataset) return;
        if (!element.dataset['modalClose']) return;
        this.onclose.emit();
    }

    public ui = {
        h: {
            outside: this._outside.bind(this)
        }
    }
}
