import { Component, OnDestroy } from '@angular/core';
import { ModalService } from './services/modal.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnDestroy {

    private modal: Subscription;

    constructor(
        public modalService: ModalService
    ) {
        this.modal = this.modalService.modal$.subscribe(info => {
            console.log('modal status???',info);
        });
    }

    public ngOnDestroy(): void {
        this.modal.unsubscribe();
    }

    private _about(req: any) : void {
        this.modalService.window.open(req);
    }

    private _data(req: any) : void {
        this.modalService.window.open(req);
    }

    public ui = {
        h: {
            about: this._about.bind(this),
            data: this._data.bind(this)
        }
    }
}
