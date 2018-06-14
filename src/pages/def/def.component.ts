import { Component } from "@angular/core";
import { ViewController } from "ionic-angular/umd";

@Component({
    selector:'def',
    templateUrl:'def.component.html'
})

export class DefinitionComponent {
    constructor(public viewCtrl: ViewController){

    }
    dismiss() {
        this.viewCtrl.dismiss();
      }
}