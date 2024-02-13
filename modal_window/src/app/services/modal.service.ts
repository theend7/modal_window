import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

export type TModalReq = {
    content?: string;
    type?: string;
}

@Injectable({
    providedIn: 'root'
})
export class ModalService {

    constructor() { }

    private readonly _modal: Subject<TModalReq> = new Subject<TModalReq>();
    public readonly modal$: Observable<TModalReq> = this._modal.asObservable();

    public window = {
        modal: <TModalReq> { type: 'modal' },
        open: (req: TModalReq): void => {
            if (!req) return;
            if (!req.content) return;
            if (!req.type) return;
            if (req.type !== 'modal') return;
            this.window.modal.content = req.content || '';
            this.window.modal.type = req.type || '';
            console.log(this.window);
            this._modal.next(req);
        },
        close: (req: TModalReq): void => {
            if (!req) return;
            if (req.type !== 'modal') return;
            this.window.modal.content = '';
            this.window.modal.type = '';
            console.log(this.window);
            this._modal.next(req);
        }
    }

}
