import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular/umd';
//import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'details-page',
    templateUrl: 'details.component.html'
})
export class DetailsPage {
    reciepts: any = [];
    category: any;

    constructor(public viewCtrl: ViewController) {

    }
    dismiss() {
        this.viewCtrl.dismiss();
    }
}