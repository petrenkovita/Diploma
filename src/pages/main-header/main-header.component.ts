import {Component, Input, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
    selector: 'main-header',
    templateUrl: 'main-header.component.html',
})

export class MainHeaderComponent implements OnInit {
    @Input()
    title: string;

    constructor(public navCtrl: NavController) {
    }
    ngOnInit() {
    }
}